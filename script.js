//Seating Chart JavaScript
let seatChart = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
];


let input = document.getElementById('studentName');
let modeText = document.getElementById('modeText');
let mode ='assign';
let displayStats = document.getElementById('stats');
let cell = ''


function drawChart() {
    
    let html = `<table>`;

    for (let i = 0; i < seatChart.length; i++) {
        html += `<tr>`;

        for (let j = 0; j < seatChart.length; j++) {
            html += `<td class="empty" id="cell-${i}-${j}" onclick="cellClicked(${i},${j})">Empty</td>`;
        }

        html += `</tr>`;
    }

    html += `</table>`;
    document.getElementById("grid").innerHTML = html;
};
drawChart();

function cellClicked(row, col){
    cell = document.getElementById(`cell-${row}-${col}`);
    console.log(cell)
    if(mode=='assign'){
        if(input.value ===''){
             message.innerHTML = "Type A Name";
        }
        else if(cell.innerHTML!=='Empty'){
            message.innerHTML = "Seat Already Taken";
        }
        else{
            seatChart[row][col] = input.value;
            message.innerHTML = `${input.value}assigned to row ${row}, colum ${col}`;
            input.value=``;
        }
    } 
    else if(mode =='remove'){
        if(cell.innerHTML=='Empty'){
            message.innerHTML='Seat is Already Empty';
        }
        else{
            message.innerHTML=`Removed ${cell.innerHTML} from row ${row}, column ${col}`;
            seatChart[row][col] = 'Empty';
        }
    }
     drawChart();
};


function assignMode(){
    modeText.innerHTML = `Mode: Assign (clickempty seat)`;
    mode = `Assign`
};

function removeMode(){
    modeText.innerHTML = `Mode: Remove(click filled seat)`;
    mode = `remove`
};