import Comment from "../comment/Comment"
import data from "../../data.json"
import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Post({...props}){
    const [userData, setUserData] = useState({})
    
    useEffect(()=> {
        // actually this data should be fetched from backend API
        setUserData(data)
    }, [])

    
   return (<div style={{maxWidth: "500px"}}>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {userData?.post?.message}
                    </Typography>
                </CardContent>
            </Card>
            {userData?.post?.comments.map(comment => {
                return <Comment comment = {comment} level = {0}/>
            })}
          
        </div>)
}