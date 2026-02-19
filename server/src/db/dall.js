import fs from "node:fs/promises"


export async function readData(){
    try{
    const data = await fs.readFile("./src/terrorData.csv", 'utf-8');
    const rows = data.split('\n').slice(0, 51)
    const headers = rows[0].split(',');

    return rows.slice(1).map(row => {
        const v = row.split(',');
        return { 
            [headers[0]]: v[0], 
            [headers[1]]: v[1], 
            [headers[2]]: v[2],
            [headers[3]]: v[3],
            [headers[4]]: v[4],
            [headers[5]]: v[5],
            [headers[6]]: v[6],
            [headers[7]]: v[7],
            [headers[8]]: v[8],
            [headers[9]]: v[9],
            [headers[10]]: v[10],
            [headers[11]]: v[11] 
        };
    });
}

    catch (err){
        return false
    }
}


export async function readDataScore(){
    try{
    const json = await fs.readFile("./src/dataScore.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}




export async function writeData(newScore){
    try{
    const objNewScore = {newScore, createdAt: new Date().toISOString()}

    const data = await readDataScore();
    data.push(objNewScore)

    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile("./src/dataScore.json", jsonString)
    return true}

    catch (err){
        console.log("User entry failed!")
        return false
    }
}