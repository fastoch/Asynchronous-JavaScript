const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    // The fetch() promise only rejects on network errors, not on HTTP error responses (like 404 or 500).
    // So, we need to check the `response.ok` property to ensure the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error) // logs the error for debugging purposes
    throw error
  } 
}

// Example of how to consume the fetchData function and handle errors
const main = async () => {
  console.log('Attempting to fetch data...')
  try {
    const data = await fetchData()
    console.log('Data received successfully:', data)
  } catch (error) {
    // Because fetchData re-throws the error, we can catch it here and handle it gracefully.
    console.error('The operation failed:', error.message)
  } finally {
    console.log('Data Fetching Operation completed.')
  }
}

main()