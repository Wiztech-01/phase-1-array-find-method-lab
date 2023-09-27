// code your solution here
function superbowlWin(record) {
    function superbowlWin(records) {
        const winningRecord = records.find(record => record.result === "W");
        if (win){
            return win.year;
            }
            else{
            return undefined;   
            }
      }
    console.log (superbowlWin(records))
    
    const record = [
        { year: "2015", result: "W"},
        { year: "2014", result: "N/A"},
        { year: "2013", result: "L"},
        { year: "2012", result: "N/A"},
    ]
}