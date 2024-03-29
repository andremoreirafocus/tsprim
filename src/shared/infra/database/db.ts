import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

// getConnectionOptions().then(options => {
//   const newOptions = options as IOptions;
//   newOptions.host = 'database'; 
//   createConnection({
//     ...options,
//   }).then(connection => {
//   // here you can start to work with your entities
//   console.log("connected to DB !!!!!")
//   }).catch(error => console.log(error));
// }); 

const connect = async () => {
  let connection: any;
  const options = await getConnectionOptions();
  const newOptions = options as IOptions;
  newOptions.host = 'database'; 
  try {
    connection = await createConnection({...options});
    console.log("connected to DB !!!!!")
  } catch (error) {
    console.log(error)
  }
  return connection;
}

export default connect;


