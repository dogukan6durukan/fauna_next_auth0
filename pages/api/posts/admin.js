import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import faunadb, { query as q } from 'faunadb';


export default withApiAuthRequired(async function handler(req, res) {
  
  if(req.method === 'POST') {

    const { accessToken } = await getAccessToken(req, res);
    try {
        const adminClient = new faunadb.Client({ secret: accessToken });

        const insertData = await adminClient.query(
          q.Create(
            q.Collection('Posts'),
            { data: { id : req.body.id, imageURL : req.body.imageURL  ,title: req.body.title, description : req.body.description } },
          )
        )
          
        res.send(insertData);

      } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
          code: error.code,
          error: error.message,
        });
    }

  } 

});
