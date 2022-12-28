import faunadb, { query as q } from 'faunadb';

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {

    const { Documents, Collection, Paginate, Lambda, Get, Var } = q;

    try {

            if(req.method === 'GET') {
                const getResults = await client.query(
                    q.Map(
                      Paginate(Documents(Collection("Posts"))),
                      Lambda(["PostRef"], Get(Var("PostRef")))
                    )
                );
              
                res.send(getResults);

            }

    }

    catch(err) {
        console.log(err);
        res.send(err);
    }

}
