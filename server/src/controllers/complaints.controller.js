import { KeepingScore, ReadingData } from "../services/complaints.service.js"



export async function Bringingdata(req, res){
    const data = await ReadingData()
    if(data){
        res.json(data)
    }
    else{
        res.json("אופס..., לא הצלחתי לייבא את המידע")
    }

}



export async function sendScore(req, res){
    const score = req.body
    console.log(score);
    
    const send = await KeepingScore(score)
    if(send){
        res.json("הציון נשמר בהצלחה...")
    }
    else{
        res.json("הציון לא נשמר!!!")
    }
}


