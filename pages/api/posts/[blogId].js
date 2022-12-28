import faunadb, { query as q } from 'faunadb';

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
    if(req.query.blogId && req.method === 'GET') {
        
        const getBlog = await client.query(
            q.Get(q.Ref(q.Collection('Posts'), req.query.blogId))
        );
        
        res.send(getBlog);
            
    }
}