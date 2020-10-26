getdetails()
fetch('https://api.covid19api.com/summary')
.then(function(response){
    return (response.json());
})
.then(function(data){
    let global = '';
    let input = data.Global;
        global += `
         
              <thead class="text-secondary thead-light">
                <tr class="text-white">
                    <th scope="col">New Confirmed</th>
                    <td>${input.NewConfirmed} </td>
                </tr>
            </thead>
            <thead>
                <tr class="text-white">
                    <th scope="col">Total Confirmed</th>
                    <td>${input.TotalConfirmed}</td>
                </tr>
            </thead>
            <thead>
            <tr class="text-danger">
                    <th scope="col">New Deaths</th>
                    <td>${input.NewDeaths}</td>
                </tr>
            </thead>
            <thead>
                <tr class="text-danger">
                    <th scope="col">Total Deaths</th>
                    <td>${input.TotalDeaths}</td>
                </tr>
            </thead>
            <thead>
                <tr class="text-succes">
                    <th scope="col">New Recovered</th>
                    <td>${input.NewRecovered}</td>
                </tr>
            </thead>
            <thead>
                <tr class="text-success">
                    <th scope="col">Total Recovered</th>
                    <td>${input.TotalRecovered}</td>
                </tr>
            </thead>
        `;
        document.getElementById('total').innerHTML = global;
    });


    fetch('https://api.covid19api.com/country/nigeria')
.then(function(response){
    return (response.json());
})
.then(function(data){
    let nigeria = '';
    let inputs = data[data.length-1];
        nigeria += `
        <thead class="text-secondary thead-light">
                <tr class="text-white">
                <th scope="col">Country</th>
                <td>${inputs.Country} </td>
                </tr>
            </thead>
            <thead>
                <tr class="text-white">
                    <th scope="col">Confirmed</th>
                    <td>${inputs.Confirmed}</td>
                </tr>
            </thead>
            <thead>
                <tr class="text-danger">
                    <th scope="col">Deaths</th>
                    <td>${inputs.Deaths}</td>
                </tr>
            </thead>
            <thead>
                <tr class="text-white">
                    <th scope="col">Recovered</th>
                    <td>${inputs.Recovered}</td>
                </tr>
            </thead>
            <thead>
                <tr class="text-danger">
                    <th scope="col">Date</th>
                    <td>${inputs.Date}</td>
                </tr>
            </thead>
        `;
        document.getElementById('tested').innerHTML = nigeria;
    });

  
function getdetails(){
fetch('https://api.covid19api.com/summary')
.then(function(response){
    return (response.json());
})
.then(function(data){
    let output = '';
    $(document).ready(function() {
var table = $('#menue').DataTable();
$('#menue tbody').on( 'click', 'tr', function () {
$(this).toggleClass('selected');
} );


$('#button').click( function () {
alert( table.rows('.selected').data().length +' row(s) selected' );
} );
} );
    data.Countries.forEach(function(user){
        output += `
                <tr style="text: danger">
                <td class="text-secondary">${user.Country} </td>
                <td class="text-secondary">${user.CountryCode}</td>
                <td class="text-secondary">${user.Slug}</td>
                <td class="text-secondary">${user.NewConfirmed}</td>
                <td class="text-secondary">${user.TotalConfirmed}</td>
                <td class="text-secondary">${user.NewDeaths}</td>
                <td class="text-secondary">${user.TotalDeaths}</td>
                <td class="text-secondary">${user.NewRecovered}</td>
                <td class="text-secondary">${user.TotalRecovered}</td>                       
                <td class="text-secondary">${user.Date}</td>
                </tr>
        `;
    });
    document.getElementById('output').innerHTML = output;
})
}
