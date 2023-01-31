import { NextApiRequest, NextApiResponse } from "next";

type Data ={
    id: number;
    title: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>){
    return res.json(
        [
            {id: 1, title: 'Node'},
            {id: 2, title: 'Next'}
        ]
    )
}