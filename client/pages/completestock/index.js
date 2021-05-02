import React from 'react'

import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

import ComstkDataService from '../../services/CompleteStock';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {withStyles} from '@material-ui/core'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.skyblue,
        color: theme.palette.common.brown,
    },
    body: {
        fontSize: 12,
    }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }
}))(TableRow)

const index = () => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
            
            <CompleteStkPage />
            </QueryClientProvider>
        </div>
    )
}

async function fetchCompletestk(page = 1) {
    const { data } = await ComstkDataService.getAll(page)
    return data
  }

function CompleteStkPage(){
    const queryClient = useQueryClient()
    const [page, setPage] = React.useState(1)

    const { status, data, error, isFetching, isPreviousData } = useQuery(
        ['completestk', page],
        () => fetchCompletestk(page),
        { keepPreviousData: true, staleTime: 50000 }
      )

      // Prefetch the next page!
    React.useEffect(() => {
        if (data?.next) {
      queryClient.prefetchQuery(['completestk', page + 1], () =>
        fetchCompletestk(page + 1)
      )
    }
  }, [data, page, queryClient])

  
  return (
      <>
      
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <>
        
<div> <br /> Current Page: {page} (Records are sorted value-wise descending, max. 100 rows each page)</div> <br />
      <button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          setPage(old => (data?.next ? old + 1 : old))
        }}
        disabled={isPreviousData || !data?.next}
      >
        Next Page
      </button>
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{' '}
        <div>
          {/* {data.data.map(stock => (
            <p key={stock._id}>{stock['material-code']} {stock['current-stkqty']} {stock['current-stkval']} </p>
          ))} */}
          <CompleteStock data = {data}/>
        </div>
        </>
      )}

    <ReactQueryDevtools initialIsOpen />
    </>
  )
}

function CompleteStock({data}){
	// to format the value to SAR currency

	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'SAR',

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		// maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

  function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	return (
		<TableContainer>
			<Table aria-label='Complete stock table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='right'>Material code:</StyledTableCell>
						<StyledTableCell align='right'> Plant code: </StyledTableCell>
						<StyledTableCell align='right'> Receipt quantity</StyledTableCell>
						<StyledTableCell align='right'> Issue quantity: </StyledTableCell>
						<StyledTableCell align='right'>Current stock qty:</StyledTableCell>
						<StyledTableCell align='right'> Unit of measure </StyledTableCell>
						<StyledTableCell align='right'> Receipt value: </StyledTableCell>
						<StyledTableCell align='right'> Issue value</StyledTableCell>
						<StyledTableCell align='right'>
							{' '}
							Current stock value:
						</StyledTableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{data.data.map((row) => (
						<StyledTableRow key={row._id}>
							<StyledTableCell align='right'>
								{row['material-code']}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{row['plant-code']}
							</StyledTableCell>

							<StyledTableCell align='right'>
								{formatNumber(row['receipt-qty'])}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{formatNumber(row['issue-qty'])}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{formatNumber(row['current-stkqty'])}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{row['unit-of-measure']}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{formatter.format(row['receipt-val'])}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{formatter.format(row['issue-val'])}
							</StyledTableCell>
							<StyledTableCell align='right'>
								{formatter.format(row['current-stkval'])}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default index
