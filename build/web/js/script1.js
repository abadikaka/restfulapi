/* global children */
$('.ui.menu .ui.dropdown').dropdown({
    on: 'hover'
});
$('.ui.dropdown').dropdown();
//$('#table-fact1').DataTable();
//$('.ui.modal').modal('show');
$('#periodselect').on('change', function () {
    if ($(this).val() === '-1') {
        $('.ui.modal').modal('show');
    }
});


$('.tambahuser').on('click', function () {
    $('.tambah').modal('show');
});


$('#start-date').calendar({
    type: 'date',
    monthFirst : false,
    startMode : 'year',
    formatter:{
        date: function(date, settings){
            if(!date)
                return '';
            var day = ('0' + (date.getDate())).slice(-2);
            var month = ('0' + (date.getMonth()+1)).slice(-2);
            var year = date.getFullYear();
            return year + '-' + month + '-' + day;
        }
    }
});

$('#end-date').calendar({
    type: 'date',
    monthFirst : false,
    startMode : 'year',
    formatter:{
        date: function(date, settings){
            if(!date)
                return '';
            var day = ('0' + (date.getDate())).slice(-2);
            var month = ('0' + (date.getMonth()+1)).slice(-2);
            var year = date.getFullYear();
            return year + '-' + month + '-' + day;
        }
    }
});

$('.ui.accordion')
  .accordion({
      exclusive:false
});

//$('#table-fact').DataTable();
$('#addPeriod').on('click',function(event) {
    var rows= document.getElementById("jenis_kelamin").value;
    document.forms[0].action="addPeriod";
    document.forms[0].submit();
    //alert(rows); 
});

$('.edituser').on('click',function(event) {
    $('.edit').modal('show');
    $('#userEdit').val($(this).closest('tr').find('td .username').val());
    $('#userId').val($(this).closest('tr').find('.idUsr').val()); 
    if ($(this).closest('tr').find('.roleUser').val() === 'Admin') {         
        $('select#jenis_role option:eq(0)').prop('selected', true).trigger('change');
    }else if ($(this).closest('tr').find('.roleUser').val() === 'User'){
        $('select#jenis_role option:eq(1)').prop('selected', true).trigger('change');
    }
    
});


$('#prosesfact').on('click',function(event) {
      event.preventDefault();

       $.post('ajaxAction').done(function(response){
           var list = response.list;
           $("#fact-table").replaceWith('<tbody id="fact-table"></tbody>');
           for(var i =0;i<list.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>"+list[i].tanggal+"</td>";
               newElem += "<td>"+list[i].no_bon+"</td>";
               newElem += "<td>"+list[i].kd_customer+"</td>";
               newElem += "<td>"+list[i].umur+"</td>";
               newElem += "<td>"+list[i].id_toko+"</td>";
               newElem += "<td>"+list[i].kd_strip+"</td>";
               newElem += "<td>"+list[i].jumlah+"</td>";
               newElem += "</tr>";
               $("#fact-table").append(newElem);    
               //console.log(newElem);
           }
           //console.log(response);
           //alert(response);
       });
});

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
var jsonObj = [];
var jsonSatu = [];
var jsonDua = [];

var itemku = {};
function createJSON(response) {


//    item["name"] = "Root";
    itemku = {"items":response.items,"clusterMinDist":response.clusterMinDist,"name":"Root", "children":response.children};
//      console.log(itemku);

}

function getData() {
    return itemku;
}
var listpdfku = [];
function createJSONpdf(jarak,item) {
    listpdf = {"jarak":jarak,"items":item};
    listpdfku.push(listpdf);
}

$('#pdfdend').on('click',function(event) {
   

  //ignore mouse events and animation
    var svgText = $('#dendrogrampano').html();

    canvg('canvas', svgText);
    canvg(document.getElementById('canvas'), '<svg>...</svg>');
    
    var canvas = document.getElementById('canvas');
    var img = canvas.toDataURL("image/png");
    var w=window.open('about:blank','image from canvas');
    w.document.write("<img src='"+img+"' alt='from canvas'/>");
});


var clustersatu = [];
var clusterdua = [];
var clustertiga = [];
var clusterempat = [];
var clusterlima = [];
var clusterenam = [];
var clustertujuh = [];
var clusterdelapan = [];
var clustersembilan = [];
var clustersepuluh = [];
var clustersebelas = [];
var clusterduabelas = [];

var clustersatuscat = [];
var clusterduascat = [];
var clustertigascat = [];
var clusterempatscat = [];
var clusterlimascat = [];
var clusterenamscat = [];
var clustertujuhscat = [];
var clusterdelapanscat = [];
var clustersembilanscat = [];
var clustersepuluhscat = [];
var clustersebelasscat = [];
var clusterduabelasscat = [];

$('#dendrogram').on('click',function(event) {
    event.preventDefault();
    //var newElm = "<div id='container' style='width:100%; height:400px;'></div>";
    //$("#dendrogrampan").append(newElm);
    var $body = $('body');    
    $body.addClass('loading');           
    function stringToUint(string) {
        var string = btoa(unescape(encodeURIComponent(string))),
            charList = string.split(''),
            uintArray = [];
        for (var i = 0; i < charList.length; i++) {
            uintArray.push(charList[i].charCodeAt(0));
        }
        return new Uint8Array(uintArray);
    }

    function uintToString(uintArray) {
        //var encodedString = String.fromCharCode.apply(null, uintArray),
            //decodedString = decodeURIComponent(escape(atob(encodedString)));
        //return decodedString;
        var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=uintArray.length;
        var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for(i=0;i<64;i++){e[A.charAt(i)]=i;}
        for(x=0;x<L;x++){
            c=e[uintArray.charAt(x)];b=(b<<6)+c;l+=6;
            while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
        }
        return r;
    }
    
    /*var xhr = new XMLHttpRequest();
    xhr.open('GET', 'dendrogram', true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e){
        var uInt8Array = new Uint8Array(this.response);
        console.log("DATA XHR" + this.response);
        console.log("uInt" + uInt8Array);
        var length = uInt8Array.byteLength;
        var str = "";
        var str2 ="";
        var str3 ="";
        //287939756 = 3000000
        for (var i=0; i<100000; i++) {
          str += String.fromCharCode(uInt8Array[i]);
        }
        //var serializedData = JSON.stringify(uInt8Array);
        //var message = JSON.parse(serializedData);
        //console.log("Serial : " + serializedData);
        //var response = btoa(uInt8Array);
        //console.log("RESPONSE:"+ response);        
        //enc = stringToUint(JSON.stringify(str)),
        //var dec = JSON.parse(uintToString(uInt8Array));
        var dec = JSON.parse(str);
        console.log("DEC:"+ dec.children);        
    };
    xhr.send();*/
//    var consume = function(response) {
//        return responseReader.read().then(function(response) {
//            if (result.done) { console.log("HASIL STR"+str);return; }
//
//            // do something with the current chunk
//            var chunk = result.value;
//            str += chunk;            
//            return consume(responseReader);
//        });
//    }
    
//    fetch('dendrogram', {
//	method: 'post'
//    }).then(function(response) {
//        var json = response.json();
//        console.log("Here are " + json);
//    })
//    .catch(console.log.bind(console));

//    fetch('dendrogram')
//        .then(function(response) {
//            return response.json()
//          }).then(function(json) {
//            console.log('parsed json', json)
//          }).catch(function(ex) {
//            console.log('parsing failed', ex)
//          })
          
    $.post('dendrogram', {
            'transfer-encoding': 'chunked'
        }, 20000).done(function(response){
        $body.removeClass('loading');
        console.log(response);
        
        document.getElementById('loadingNotif').remove();
        var dendrogrampan =  "<div id='dendrogrampan'></div>";
        var tabel1 = "<table class='ui celled padded table' id='table-single'><thead><tr><th class='left aligned'>Jarak</th><th>Items</th></tr></thead><tbody id='fact-table'><tr id='rowhapus'><td class='left aligned' colspan='7'>No data to display in the table </td></tr></tbody></table>";
        var tabel2 = "<table class='ui celled padded table' id='table-single'><thead><tr><th class='left aligned'>Description</th><th>Value</th></tr></thead><tbody id='fact-purity'><tr id='rowhapuspurity'><td class='left aligned' colspan='7'>No data to display in the table </td></tr></tbody></table>";
        var grafik = "<table class='ui celled padded table' id='table-grafik'><thead><tr><th class='left aligned'>Cluster</th><th>Anak</th><th>Wanita</th><th>Pria</th><th>Sepatu</th><th>Umur</th></tr></thead><tbody id='fact-table-grafik'><tr id='rowhapusgrafik'><td class='left aligned' colspan='7'>No data to display in the table </td></tr></tbody></table>";
        $("#tambahtabel1").append(tabel1);
        $("#tambahtabel2").append(tabel2);                    
        $("#tambahdendo").append(dendrogrampan);
        $("#tambahgrafik").append(grafik);

        var tablebaru = "<table class='ui celled padded table' id='table-single'><thead><tr><th class='left aligned'>Jarak</th><th>Items</th></tr></thead><tbody id=fact-table></tbody></table>";
        document.getElementById('rowhapus').remove();
        document.getElementById('rowhapuspurity').remove();
        document.getElementById('rowhapusgrafik').remove();
        var list = response;
//        console.log(list.subClusters);
//        console.log(list.subClusters.length);
        
        
        createJSON(list);
        var zzz = getData();
        if (zzz.items.length < 300 ) {
            var width = 3000;
            var height = 500;
        }else if (zzz.items.length > 299 && zzz.items.length < 700 ) {
            
            var width = 3000;
            var height = 500;
        }else if (zzz.items.length > 699 && zzz.items.length < 1500 ) {
            
            var width = 3000;
            var height = 500;
        }else if (zzz.items.length > 1499 ) {
            
            var width = 3000;
            var height = 500;
        }   
        
        var cluster = d3.layout.cluster()
            .size([height*15, width - 160]);

        var diagonal = d3.svg.diagonal()
            .projection(function (d) {
            return [d.y, d.x];
        });

        var svg = d3.select("#dendrogrampan").append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(d3.behavior.zoom().on("zoom", function () {
                svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
              })).append("g")
            .attr("transform", "translate(40,0)");

        var root = getData(),
            nodes = cluster.nodes(root),
            links = cluster.links(nodes);
        
        var nodes = cluster.nodes(root),
                links = cluster.links(nodes);

            var link = svg.selectAll(".link")
                .data(links)
              .enter().append("path")
                .attr("class", "link")
                .attr("d", function(d) {
                  return "M" + d.source.y + "," + d.source.x
                      + "C" + d.source.y + "," + d.source.x
                      + " " + d.source.y + "," + d.target.x
                      + " " + d.target.y + "," + d.target.x;
                });

            var node = svg.selectAll(".node")
                .data(nodes)
              .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

            node.append("circle")
                .attr("r", 4.5);

            node.append("text")
                .attr("dx", function(d) { return d.children ? -8 : 8; })
                .attr("dy", 3)
                .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
                .text(function(d) { return d.name; });

          d3.select(self.frameElement).style("height", height + "px");
            
            var listku = getData();
            $("#fact-table").replaceWith('<tbody id="fact-table"></tbody>');
            $("#fact-purity").replaceWith('<tbody id="fact-purity"></tbody>');            

            var jarakDist = listku.clusterMinDist;
            
            //cari min max umur buat kelompok umur
            var minumur = Number.MAX_VALUE;
            var maxumur = Number.NEGATIVE_INFINITY;
            
            for(var i =0;i<listku.items.length;i++){
                if (listku.items[i].umur < minumur) {
                    minumur = listku.items[i].umur;
                }                
                if (listku.items[i].umur > maxumur) {
                    maxumur = listku.items[i].umur;
                }                
            }
            var diffumur = maxumur - minumur;
            var bagitiga = diffumur / 3;
            var bagiempat = diffumur / 4;

            if ($("#potong").val() === "0") {
                //tigaklaster
                var akirgolsatu = minumur + bagitiga;
                var akirgoldua = akirgolsatu + bagitiga;
                var akirgoltiga = akirgoldua + bagitiga;
                var golsatuanak = 0;
                var golsatuwanita = 0;
                var golsatupria = 0;
                var golsatusepatu = 0;
                var golduaanak = 0;
                var golduawanita = 0;
                var golduapria = 0;
                var golduasepatu = 0;
                var goltigaanak = 0;
                var goltigawanita = 0;
                var goltigapria = 0;
                var goltigasepatu = 0;           

                var clusterku = [];
    
                            //bilatigagolongan
            
                for(var i =0;i<listku.items.length-1;i++){
                   var penandaJarak = listku.children[0].clusterMinDist;  

                   var newElem = "<tr>";
                   var itemitem = "";
                   newElem += "<td style='vertical-align:top;'>"+jarakDist+"</td>";
                   for (var j = 0; j < listku.children.length; j++) {
                        var penanda  = j+1;
                        var newChild = "Cluster ke - " +penanda+ ": {";
                        for (var k = 0; k < listku.children[j].items.length; k++) {                    
                            if (k === listku.children[j].items.length-1) {
                                if (listku.children[j].items[k] === null) {                        
                                    newChild += listku.children[j].name;
                                    
                                    if (penanda === 1 && i === 10) {
                                        clustersatu.push(listku.children[j]);                                    
                                    }else if(penanda === 2 && i === 10){
                                        clusterdua.push(listku.children[j]);
                                    }else if(penanda === 3 && i === 10){
                                        clustertiga.push(listku.children[j]);
                                    }else if(penanda === 4 && i === 10){
                                        clusterempat.push(listku.children[j]);
                                    }else if(penanda === 5 && i === 10){
                                        clusterlima.push(listku.children[j]);
                                    }else if(penanda === 6 && i === 10){
                                        clusterenam.push(listku.children[j]);
                                    }else if(penanda === 7 && i === 10){
                                        clustertujuh.push(listku.children[j]);
                                    }else if(penanda === 8 && i === 10){
                                        clusterdelapan.push(listku.children[j]);
                                    }else if(penanda === 9 && i === 10){
                                        clustersembilan.push(listku.children[j]);
                                    }else if(penanda === 10 && i === 10){
                                        clustersepuluh.push(listku.children[j]);
                                    }else if(penanda === 11 && i === 10){
                                        clustersebelas.push(listku.children[j]);
                                    }else if(penanda === 12 && i === 10){
                                        clusterduabelas.push(listku.children[j]);
                                    }
                                    
                                    if (listku.children[j].umur >= minumur && listku.children[j].umur <= akirgolsatu) {
                                        if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                            golsatuanak++;
                                        }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                            golsatuwanita++;
                                        }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                            golsatupria++;
                                        }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                            golsatusepatu++;
                                        }
                                    }else if (listku.children[j].umur > akirgolsatu && listku.children[j].umur <= akirgoldua) {
                                        if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                            golduaanak++;
                                        }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                            golduawanita++;
                                        }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                            golduapria++;
                                        }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                            golduasepatu++;
                                        }
                                    }else if (listku.children[j].umur > akirgoldua && listku.children[j].umur <= akirgoltiga) {
                                        if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                            goltigaanak++;
                                        }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                            goltigawanita++;
                                        }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                            goltigapria++;
                                        }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                            goltigasepatu++;
                                        }
                                    } 
                                }else{
                                    newChild += listku.children[j].items[k].name;
                                    if (penanda === 1 && i === 10) {
                                        clustersatu.push(listku.children[j].items[k]);                                    
                                    }else if(penanda === 2 && i === 10){
                                        clusterdua.push(listku.children[j].items[k]);
                                    }else if(penanda === 3 && i === 10){
                                        clustertiga.push(listku.children[j].items[k]);
                                    }else if(penanda === 4 && i === 10){
                                        clusterempat.push(listku.children[j].items[k]);
                                    }else if(penanda === 5 && i === 10){
                                        clusterlima.push(listku.children[j].items[k]);
                                    }else if(penanda === 6 && i === 10){
                                        clusterenam.push(listku.children[j].items[k]);
                                    }else if(penanda === 7 && i === 10){
                                        clustertujuh.push(listku.children[j].items[k]);
                                    }else if(penanda === 8 && i === 10){
                                        clusterdelapan.push(listku.children[j].items[k]);
                                    }else if(penanda === 9 && i === 10){
                                        clustersembilan.push(listku.children[j].items[k]);
                                    }else if(penanda === 10 && i === 10){
                                        clustersepuluh.push(listku.children[j].items[k]);
                                    }else if(penanda === 11 && i === 10){
                                        clustersebelas.push(listku.children[j].items[k]);
                                    }else if(penanda === 12 && i === 10){
                                        clusterduabelas.push(listku.children[j].items[k]);
                                    }
                                    
                                    if (listku.children[j].items[k].umur >= minumur && listku.children[j].items[k].umur <= akirgolsatu) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            golsatuanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            golsatuwanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            golsatupria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            golsatusepatu++;
                                        }
                                    }else if (listku.children[j].items[k].umur > akirgolsatu && listku.children[j].items[k].umur <= akirgoldua) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            golduaanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            golduawanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            golduapria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            golduasepatu++;
                                        }
                                    }else if (listku.children[j].items[k].umur > akirgoldua && listku.children[j].items[k].umur <= akirgoltiga) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            goltigaanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            goltigawanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            goltigapria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            goltigasepatu++;
                                        }
                                    } 
                                }
                            }else{
                                newChild += listku.children[j].items[k].name +", ";
                                if (penanda === 1 && i === 10) {
                                        clustersatu.push(listku.children[j].items[k]);                                    
                                    }else if(penanda === 2 && i === 10){
                                        clusterdua.push(listku.children[j].items[k]);
                                    }else if(penanda === 3 && i === 10){
                                        clustertiga.push(listku.children[j].items[k]);
                                    }else if(penanda === 4 && i === 10){
                                        clusterempat.push(listku.children[j].items[k]);
                                    }else if(penanda === 5 && i === 10){
                                        clusterlima.push(listku.children[j].items[k]);
                                    }else if(penanda === 6 && i === 10){
                                        clusterenam.push(listku.children[j].items[k]);
                                    }else if(penanda === 7 && i === 10){
                                        clustertujuh.push(listku.children[j].items[k]);
                                    }else if(penanda === 8 && i === 10){
                                        clusterdelapan.push(listku.children[j].items[k]);
                                    }else if(penanda === 9 && i === 10){
                                        clustersembilan.push(listku.children[j].items[k]);
                                    }else if(penanda === 10 && i === 10){
                                        clustersepuluh.push(listku.children[j].items[k]);
                                    }else if(penanda === 11 && i === 10){
                                        clustersebelas.push(listku.children[j].items[k]);
                                    }else if(penanda === 12 && i === 10){
                                        clusterduabelas.push(listku.children[j].items[k]);
                                    }
                                    
                                if (listku.children[j].items[k].umur >= minumur && listku.children[j].items[k].umur <= akirgolsatu) {
                                    if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                        golsatuanak++;
                                    }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                        golsatuwanita++;
                                    }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                        golsatupria++;
                                    }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                        golsatusepatu++;
                                    }
                                }else if (listku.children[j].items[k].umur > akirgolsatu && listku.children[j].items[k].umur <= akirgoldua) {
                                    if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                        golduaanak++;
                                    }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                        golduawanita++;
                                    }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                        golduapria++;
                                    }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                        golduasepatu++;
                                    }
                                }else if (listku.children[j].items[k].umur > akirgoldua && listku.children[j].items[k].umur <= akirgoltiga) {
                                    if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                        goltigaanak++;
                                    }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                        goltigawanita++;
                                    }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                        goltigapria++;
                                    }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                        goltigasepatu++;
                                    }
                                }
                            }
                        }
                        var obj = [
                            {
                                'nama': 'golsatuanak',
                                'jumlah' : golsatuanak
                            },
                            {
                                'nama': 'golsatuwanita',
                                'jumlah' : golsatuwanita
                            },
                            {
                                'nama': 'golsatupria',
                                'jumlah' : golsatupria
                            },
                            {
                                'nama': 'golsatusepatu',
                                'jumlah' : golsatusepatu
                            },
                            {
                                'nama': 'golduaanak',
                                'jumlah' : golduaanak
                            },
                            {
                                'nama': 'golduawanita',
                                'jumlah' : golduawanita
                            },
                            {
                                'nama': 'golduapria',
                                'jumlah' : golduapria
                            },
                            {
                                'nama': 'golduasepatu',
                                'jumlah' : golduasepatu
                            }, 
                            {
                                'nama': 'goltigaanak',
                                'jumlah' : goltigaanak
                            },
                            {
                                'nama': 'goltigawanita',
                                'jumlah' : goltigawanita
                            },{
                                'nama': 'goltigapria',
                                'jumlah' : goltigapria
                            },
                            {
                                'nama': 'goltigasepatu',
                                'jumlah' : goltigasepatu
                            }];

                        var max = Math.max.apply(Math, obj.map(function(o) {
                            return o.jumlah;
                        }));     
                        
                        var maks = Number.NEGATIVE_INFINITY;
                        var indek = 0;  
                        
                        obj.forEach(function (v, k) { 
                            if (maks < +v.jumlah) { 
                                maks = +v.jumlah; 
                                indek = k; 
                            }
                        });

                        var namagol = obj[indek]['nama'];
                        var jumlahaslicluster = listku.children[j].items.length;
                        //console.log("MAX : " + max);
                        //console.log("NAMA : " + namagol);
                        if (i === 10) {
                            clusterku.push({'nama':namagol,'jumlah':maks,'jumlahasli':jumlahaslicluster});
                        }

                        
                        var golsatuanak = 0;
                        var golsatuwanita = 0;
                        var golsatupria = 0;
                        var golsatusepatu = 0;
                        var golduaanak = 0;
                        var golduawanita = 0;
                        var golduapria = 0;
                        var golduasepatu = 0;
                        var goltigaanak = 0;
                        var goltigawanita = 0;
                        var goltigapria = 0;
                        var goltigasepatu = 0;
                        newChild += "}\n\n";
                        itemitem += newChild;
                   }
                   newElem += "<td>"+itemitem+"</td>";
                   //createJSONpdf(jarakDist,itemitem);
                   newElem += "</tr>";
                   
                   $("#fact-table").append(newElem);
                   //bandingkan nilai minDist dalam children ambil 1 lalu remove yg lama dan spice yg baru

                    var indexArr = 0;

                   for (var l = 1; l < listku.children.length; l++) {    
                            if (listku.children[l].clusterMinDist >= penandaJarak && listku.children[l].isLeaf === false) {
                                penandaJarak = listku.children[l].clusterMinDist;
                                indexArr = l;
                            }                   
                    } 

                    jarakDist = penandaJarak;

                    if (listku.children[indexArr].isLeaf === true) {
                        var children1 = listku.children[indexArr];                
                    }else{
                        var children1 = listku.children[indexArr].children[0];                    
                    }
                    if (listku.children[indexArr].isLeaf === true) {
                        var children2 = listku.children[indexArr];
                    }else{
                        var children2 = listku.children[indexArr].children[1];
                    }
                    if (i === listku.items.length-2) {
                        break;
                    }else{
                        listku.children.splice(indexArr,1);
                        listku.children.push(children1,children2);
                    }
                    //console.log(listku);
                    //console.log(listku);
                    if (i===10) {
                        console.log(clusterku);
                        break;
                    }
                }

            }else if($("#potong").val() === "1"){
                //empatklaster
                var akirgolsatu = minumur + bagiempat;
                var akirgoldua = akirgolsatu + bagiempat;
                var akirgoltiga = akirgoldua + bagiempat;
                var akirgolempat = akirgoltiga + bagiempat;
                var golsatuanak = 0;
                var golsatuwanita = 0;
                var golsatupria = 0;
                var golsatusepatu = 0;
                var golduaanak = 0;
                var golduawanita = 0;
                var golduapria = 0;
                var golduasepatu = 0;
                var goltigaanak = 0;
                var goltigawanita = 0;
                var goltigapria = 0;
                var goltigasepatu = 0;
                var golempatanak = 0;
                var golempatwanita = 0;
                var golempatpria = 0;
                var golempatsepatu = 0;           
                var clusterku = [];
                //bilaempatgolongan
                for(var i =0;i<listku.items.length-1;i++){
                       var penandaJarak = listku.children[0].clusterMinDist;  

                       var newElem = "<tr>";
                       var itemitem = "";
                       newElem += "<td style='vertical-align:top;'>"+jarakDist+"</td>";
                       for (var j = 0; j < listku.children.length; j++) {
                            var penanda  = j+1;
                            var newChild = "Cluster ke - " +penanda+ ": {";
                            for (var k = 0; k < listku.children[j].items.length; k++) {                    
                                if (k === listku.children[j].items.length-1) {
                                    if (listku.children[j].items[k] === null) {                        
                                        newChild += listku.children[j].name;                                
                                        if (listku.children[j].umur >= minumur && listku.children[j].umur <= akirgolsatu) {
                                            if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                                golsatuanak++;
                                            }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                                golsatuwanita++;
                                            }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                                golsatupria++;
                                            }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                                golsatusepatu++;
                                            }
                                        }else if (listku.children[j].umur > akirgolsatu && listku.children[j].umur <= akirgoldua) {
                                            if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                                golduaanak++;
                                            }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                                golduawanita++;
                                            }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                                golduapria++;
                                            }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                                golduasepatu++;
                                            }
                                        }else if (listku.children[j].umur > akirgoldua && listku.children[j].umur <= akirgoltiga) {
                                            if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                                goltigaanak++;
                                            }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                                goltigawanita++;
                                            }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                                goltigapria++;
                                            }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                                goltigasepatu++;
                                            }
                                        }else if (listku.children[j].umur > akirgoltiga && listku.children[j].umur <= akirgolempat) {
                                            if (listku.children[j].totalAnak >= listku.children[j].totalWanita && listku.children[j].totalAnak >= listku.children[j].totalPria && listku.children[j].totalAnak >= listku.children[j].totalSepatu) {
                                                golempatanak++;
                                            }else if (listku.children[j].totalWanita >= listku.children[j].totalAnak && listku.children[j].totalWanita >= listku.children[j].totalPria && listku.children[j].totalWanita >= listku.children[j].totalSepatu) {
                                                golempatwanita++;
                                            }else if (listku.children[j].totalPria >= listku.children[j].totalWanita && listku.children[j].totalPria >= listku.children[j].totalAnak && listku.children[j].totalPria >= listku.children[j].totalSepatu) {
                                                golempatpria++;
                                            }else if (listku.children[j].totalSepatu >= listku.children[j].totalWanita && listku.children[j].totalSepatu >= listku.children[j].totalPria && listku.children[j].totalSepatu >= listku.children[j].totalAnak) {
                                                golempatsepatu++;
                                            }
                                        } 
                                    }else{
                                        newChild += listku.children[j].items[k].name;
                                        if (listku.children[j].items[k].umur >= minumur && listku.children[j].items[k].umur <= akirgolsatu) {
                                            if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                                golsatuanak++;
                                            }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                                golsatuwanita++;
                                            }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                                golsatupria++;
                                            }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                                golsatusepatu++;
                                            }
                                        }else if (listku.children[j].items[k].umur > akirgolsatu && listku.children[j].items[k].umur <= akirgoldua) {
                                            if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                                golduaanak++;
                                            }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                                golduawanita++;
                                            }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                                golduapria++;
                                            }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                                golduasepatu++;
                                            }
                                        }else if (listku.children[j].items[k].umur > akirgoldua && listku.children[j].items[k].umur <= akirgoltiga) {
                                            if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                                goltigaanak++;
                                            }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                                goltigawanita++;
                                            }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                                goltigapria++;
                                            }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                                goltigasepatu++;
                                            }
                                        }else if (listku.children[j].items[k].umur > akirgoltiga && listku.children[j].items[k].umur <= akirgolempat) {
                                            if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                                golempatanak++;
                                            }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                                golempatwanita++;
                                            }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                                golempatpria++;
                                            }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                                golempatsepatu++;
                                            }
                                        } 
                                    }
                                }else{
                                    newChild += listku.children[j].items[k].name +", ";
                                    if (listku.children[j].items[k].umur >= minumur && listku.children[j].items[k].umur <= akirgolsatu) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            golsatuanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            golsatuwanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            golsatupria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            golsatusepatu++;
                                        }
                                    }else if (listku.children[j].items[k].umur > akirgolsatu && listku.children[j].items[k].umur <= akirgoldua) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            golduaanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            golduawanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            golduapria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            golduasepatu++;
                                        }
                                    }else if (listku.children[j].items[k].umur > akirgoldua && listku.children[j].items[k].umur <= akirgoltiga) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            goltigaanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            goltigawanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            goltigapria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            goltigasepatu++;
                                        }
                                    }else if (listku.children[j].items[k].umur > akirgoltiga && listku.children[j].items[k].umur <= akirgolempat) {
                                        if (listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalAnak >= listku.children[j].items[k].totalSepatu) {
                                            golempatanak++;
                                        }else if (listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalWanita >= listku.children[j].items[k].totalSepatu) {
                                            golempatwanita++;
                                        }else if (listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalAnak && listku.children[j].items[k].totalPria >= listku.children[j].items[k].totalSepatu) {
                                            golempatpria++;
                                        }else if (listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalWanita && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalPria && listku.children[j].items[k].totalSepatu >= listku.children[j].items[k].totalAnak) {
                                            golempatsepatu++;
                                        }
                                    }
                                }
                            }
                            var obj = [
                                {
                                    'nama': 'golsatuanak',
                                    'jumlah' : golsatuanak
                                },
                                {
                                    'nama': 'golsatuwanita',
                                    'jumlah' : golsatuwanita
                                },
                                {
                                    'nama': 'golsatupria',
                                    'jumlah' : golsatupria
                                },
                                {
                                    'nama': 'golsatusepatu',
                                    'jumlah' : golsatusepatu
                                },
                                {
                                    'nama': 'golduaanak',
                                    'jumlah' : golduaanak
                                },
                                {
                                    'nama': 'golduawanita',
                                    'jumlah' : golduawanita
                                },
                                {
                                    'nama': 'golduapria',
                                    'jumlah' : golduapria
                                },
                                {
                                    'nama': 'golduasepatu',
                                    'jumlah' : golduasepatu
                                }, 
                                {
                                    'nama': 'goltigaanak',
                                    'jumlah' : goltigaanak
                                },
                                {
                                    'nama': 'goltigawanita',
                                    'jumlah' : goltigawanita
                                },{
                                    'nama': 'goltigapria',
                                    'jumlah' : goltigapria
                                },
                                {
                                    'nama': 'goltigasepatu',
                                    'jumlah' : goltigasepatu
                                }, 
                                {
                                    'nama': 'golempatanak',
                                    'jumlah' : golempatanak
                                },
                                {
                                    'nama': 'golempatwanita',
                                    'jumlah' : golempatwanita
                                },{
                                    'nama': 'golempatpria',
                                    'jumlah' : golempatpria
                                },
                                {
                                    'nama': 'golempatsepatu',
                                    'jumlah' : golempatsepatu
                                }];

                            var max = Math.max.apply(Math, obj.map(function(o) {
                                return o.jumlah;
                            }));     

                            var maks = Number.NEGATIVE_INFINITY;
                            var indek = 0;  

                            obj.forEach(function (v, k) { 
                                if (maks < +v.jumlah) { 
                                    maks = +v.jumlah; 
                                    indek = k; 
                                }
                            });

                            var namagol = obj[indek]['nama'];
                            var jumlahaslicluster = listku.children[j].items.length;
                            //console.log("MAX : " + max);
                            //console.log("NAMA : " + namagol);
                            if (i === 14) {
                                clusterku.push({'nama':namagol,'jumlah':maks,'jumlahasli':jumlahaslicluster});
                            }


                            var golsatuanak = 0;
                            var golsatuwanita = 0;
                            var golsatupria = 0;
                            var golsatusepatu = 0;
                            var golduaanak = 0;
                            var golduawanita = 0;
                            var golduapria = 0;
                            var golduasepatu = 0;
                            var goltigaanak = 0;
                            var goltigawanita = 0;
                            var goltigapria = 0;
                            var goltigasepatu = 0;
                            var golempatanak = 0;
                            var golempatwanita = 0;
                            var golempatpria = 0;
                            var golempatsepatu = 0;
                            newChild += "}\n\n";
                            itemitem += newChild;
                       }
                       newElem += "<td>"+itemitem+"</td>";
                       //createJSONpdf(jarakDist,itemitem);
                       newElem += "</tr>";

                       $("#fact-table").append(newElem);
                       //bandingkan nilai minDist dalam children ambil 1 lalu remove yg lama dan spice yg baru

                        var indexArr = 0;

                       for (var l = 1; l < listku.children.length; l++) {    
                                if (listku.children[l].clusterMinDist >= penandaJarak && listku.children[l].isLeaf === false) {
                                    penandaJarak = listku.children[l].clusterMinDist;
                                    indexArr = l;
                                }                   
                        } 

                        jarakDist = penandaJarak;

                        if (listku.children[indexArr].isLeaf === true) {
                            var children1 = listku.children[indexArr];                
                        }else{
                            var children1 = listku.children[indexArr].children[0];                    
                        }

                        if (listku.children[indexArr].isLeaf === true) {
                            var children2 = listku.children[indexArr];
                        }else{
                            var children2 = listku.children[indexArr].children[1];
                        }
                        if (i === listku.items.length-2) {
                            break;
                        }else{
                            listku.children.splice(indexArr,1);
                            listku.children.push(children1,children2);
                        }
                        if (i===14) {
                            console.log(clusterku);
                            break;
                        }
                }
            
           

            }
            var jumlahlamasimpan = 0;
            var satuA = false;
            var satuW = false;
            var satuP = false;
            var satuS = false;
            var duaA = false;
            var duaW = false;
            var duaP = false;
            var duaS = false;
            var tigaA = false;
            var tigaW = false;
            var tigaP = false;
            var tigaS = false;
            var empatA = false;
            var empatW = false;
            var empatP = false;
            var empatS = false;
            var jumlahsatuA = 0;
            var jumlahsatuW = 0;
            var jumlahsatuP = 0;
            var jumlahsatuS = 0;
            var jumlahduaA = 0;
            var jumlahduaW = 0;
            var jumlahduaP = 0;
            var jumlahduaS = 0;
            var jumlahtigaA = 0;
            var jumlahtigaW = 0;
            var jumlahtigaP = 0;
            var jumlahtigaS = 0;
            var jumlahempatA = 0;
            var jumlahempatW = 0;
            var jumlahempatP = 0;
            var jumlahempatS = 0;
            
            
            function ambil(a){
                if (a === "golsatuanak") {
                    return jumlahsatuA;
                }else if (a === "golsatuwanita") {
                    return jumlahsatuW;
                }else if (a === "golsatupria") {
                    return jumlahsatuP;
                }else if (a === "golsatusepatu") {
                    return jumlahsatuS;
                }else if (a === "golduaanak") {
                    return jumlahduaA;
                }else if (a === "golduawanita") {
                    return jumlahduaW;
                }else if (a === "golduapria") {
                    return jumlahduaP;
                }else if (a === "golduasepatu") {
                    return jumlahduaS;
                }else if (a === "goltigaanak") {
                    return jumlahtigaA;
                }else if (a === "goltigawanita") {
                    return jumlahtigaW;
                }else if (a === "goltigapria") {
                    return jumlahtigaP;
                }else if (a === "goltigasepatu") {
                    return jumlahtigaS;
                }else if (a === "golempatanak") {
                    return jumlahempatA;
                }else if (a === "golempatwanita") {
                    return jumlahempatW;
                }else if (a === "golempatpria") {
                    return jumlahempatP;
                }else if (a === "golempatsepatu") {
                    return jumlahempatS;
                }
            }
            function ubah(a, jumlah){
                if (a === "golsatuanak") {
                    satuA = true;
                    jumlahsatuA = jumlah;
                }else if (a === "golsatuwanita") {
                    satuW = true;
                    jumlahsatuW = jumlah;
                }else if (a === "golsatupria") {
                    satuP = true;
                    jumlahsatuP = jumlah;
                }else if (a === "golsatusepatu") {
                    satuS = true;
                    jumlahsatuS = jumlah;
                }else if (a === "golduaanak") {
                    duaA = true;
                    jumlahduaA = jumlah;    
                }else if (a === "golduawanita") {
                    duaW = true;
                    jumlahduaW = jumlah;
                }else if (a === "golduapria") {
                    duaP = true;
                    jumlahduaP = jumlah;
                }else if (a === "golduasepatu") {
                    duaS = true;
                    jumlahduaS = jumlah;
                }else if (a === "goltigaanak") {
                    tigaA = true;
                    jumlahtigaA = jumlah;    
                }else if (a === "goltigawanita") {
                    tigaW = true;
                    jumlahtigaW = jumlah;
                }else if (a === "goltigapria") {
                    tigaP = true;
                    jumlahtigaP = jumlah;
                }else if (a === "goltigasepatu") {
                    tigaS = true;
                    jumlahtigaS = jumlah;
                }else if (a === "golempatanak") {
                    empatA = true;
                    jumlahempatA = jumlah;    
                }else if (a === "golempatwanita") {
                    empatW = true;
                    jumlahempatW = jumlah;
                }else if (a === "golempatpria") {
                    empatP = true;
                    jumlahempatP = jumlah;
                }else if (a === "golempatsepatu") {
                    empatS = true;
                    jumlahempatS = jumlah;
                }
                
            }
            
            function cek(a){
                if (a === "golsatuanak") {
                    return satuA;
                }else if (a === "golsatuwanita") {
                    return satuW;
                }else if (a === "golsatupria") {
                    return satuP;
                }else if (a === "golsatusepatu") {
                    return satuS;
                }else if (a === "golduaanak") {
                    return duaA;
                }else if (a === "golduawanita") {
                    return duaW;
                }else if (a === "golduapria") {
                    return duaP;
                }else if (a === "golduasepatu") {
                    return duaS;
                }else if (a === "goltigaanak") {
                    return tigaA;    
                }else if (a === "goltigawanita") {
                    return tigaW;
                }else if (a === "goltigapria") {
                    return tigaP;
                }else if (a === "goltigasepatu") {
                    return tigaS;
                }else if (a === "golempatanak") {
                    return empatA;    
                }else if (a === "golempatwanita") {
                    return empatW;
                }else if (a === "golempatpria") {
                    return empatP;
                }else if (a === "golempatsepatu") {
                    return empatS;
                }
                
            }
            
            if($("#potong").val() === "0"){
                
                var newElem = "<tr><td>Golongan Satu:</td>";
                newElem += "<td>Nilai Normal Umur :"+minumur+"<= x <="+akirgolsatu+"</td>";
                newElem += "</tr><tr><td>Golongan Dua:</td>";
                newElem += "<td>Nilai Normal Umur :"+akirgolsatu+"< x <="+akirgoldua+"</td>";
                newElem += "</tr><tr><td>Golongan Tiga:</td>";
                newElem += "<td>Nilai Normal Umur :"+akirgoldua+"< x <="+akirgoltiga+"</td>";
                var total = 0;
                var totalsemua = 0;
                var namalama = clusterku[0].nama;
                var jumlahlama = clusterku[0].jumlah;
                for (var i = 0; i < clusterku.length; i++) {
                    if(i === 0){
                        total += clusterku[i].jumlah;                        
                    }
                    else if(cek(clusterku[i].nama) === false){
                        if (clusterku[i].nama === namalama) {
                            if (clusterku[i].jumlah > ambil(clusterku[i].nama)) {
                                total -= ambil(clusterku[i].nama);
                                total += clusterku[i].jumlah;
                            }else{

                            }
                        }else{
                            total += clusterku[i].jumlah;                        
                        }
                        ubah(clusterku[i].nama, clusterku[i].jumlah);
                    }else if(cek(clusterku[i].nama) === true){
                        if (clusterku[i].jumlah > ambil(clusterku[i].nama)) {
                                total -= ambil(clusterku[i].nama);
                                total += clusterku[i].jumlah;
                        }else{

                        }
                    }
                    totalsemua += clusterku[i].jumlahasli;
                    namalama = clusterku[i].nama;
                    jumlahlama = clusterku[i].jumlah;
                    newElem += "</tr><tr><td>Cluster - "+clusterku[i].nama+":</td>";
                    newElem += "<td>Jumlah Dominan / Jumlah Total : "+clusterku[i].jumlah+" / "+clusterku[i].jumlahasli+"</td>";
                }
                console.log("Total pure" + total);
                console.log("Total semua" + totalsemua);
                var purity = total / totalsemua;
                //newElem += "<tr><td>Purity : </td><td>"+purity+"</td></tr>";
                $("#fact-purity").append(newElem);

            }else if($("#potong").val() === "1"){
                 var newElem = "<tr><td>Golongan Satu:</td>";
                newElem += "<td>Nilai Normal Umur :"+minumur+"<= x <="+akirgolsatu+"</td>";
                newElem += "</tr><tr><td>Golongan Dua:</td>";
                newElem += "<td>Nilai Normal Umur :"+akirgolsatu+"< x <="+akirgoldua+"</td>";
                newElem += "</tr><tr><td>Golongan Tiga:</td>";
                newElem += "<td>Nilai Normal Umur :"+akirgoldua+"< x <="+akirgoltiga+"</td>";
                newElem += "</tr><tr><td>Golongan Empat:</td>";
                newElem += "<td>Nilai Normal Umur :"+akirgoltiga+"< x <="+akirgolempat+"</td>";
                var total = 0;
                var totalsemua = 0;
                var namalama = clusterku[0].nama;
                var jumlahlama = clusterku[0].jumlah;
                for (var i = 0; i < clusterku.length; i++) {
                    if(i === 0){
                        total += clusterku[i].jumlah;                        
                    }
                    else if(cek(clusterku[i].nama) === false){
                        if (clusterku[i].nama === namalama) {
                            if (clusterku[i].jumlah > ambil(clusterku[i].nama)) {
                                total -= ambil(clusterku[i].nama);
                                total += clusterku[i].jumlah;
                            }else{

                            }
                        }else{
                            total += clusterku[i].jumlah;                        
                        }
                        ubah(clusterku[i].nama, clusterku[i].jumlah);
                    }else if(cek(clusterku[i].nama) === true){
                        if (clusterku[i].jumlah > ambil(clusterku[i].nama)) {
                                total -= ambil(clusterku[i].nama);
                                total += clusterku[i].jumlah;
                        }else{

                        }
                    }
                    totalsemua += clusterku[i].jumlahasli;
                    namalama = clusterku[i].nama;
                    jumlahlama = clusterku[i].jumlah;
                    newElem += "</tr><tr><td>Cluster - "+clusterku[i].nama+":</td>";
                    newElem += "<td>Jumlah Dominan / Jumlah Total : "+clusterku[i].jumlah+" / "+clusterku[i].jumlahasli+"</td>";
                }
                var purity = total / totalsemua;
                //newElem += "<tr><td>Purity : </td><td>"+purity+"</td></tr>";
                $("#fact-purity").append(newElem);
            }
                var fixNewLine = {
                        exportOptions: {
                            format: {
                                body: function ( data, column, row ) {
                                    // Strip $ from salary column to make it numeric
                                    return column === 5 ?
                // THIS WORKS:          data.replace(/test/ig, "blablabla"):
                                        data.replace( /<br\s*\/?>/ig, "\n" ) :
                                        data;
                                }
                            }
                        }
                    };
                $('#table-single').DataTable( {
                        dom: 'Bfrtip',
                        buttons: [
                            'copy', 
                            'csv', 
                            $.extend( true, {}, fixNewLine, {
                                extend: 'excel'
                            } ),
                            'print'
                        ]
                });
    });
    
       

//    oboe('dendrogram', {
//            'transfer-encoding': 'chunked', 'Accept-Encoding' : "gzip"
//        }, 30000).done(function(response){
//        
//    })
});

$('#pdf').on('click', function(event){
    var columns = [
        {title: "Jarak", dataKey: "jarak"},
        {title: "Items", dataKey: "items"} 
    ];
    var rows = listpdfku;

    var pdfsize = 'a4';
    //var res = pdf.autoTableHtmlToJson(document.getElementById("table"));
    var doc = new jsPDF('l', 'pt', pdfsize);
    
//    doc.autoTable(columns, rows, {
//        tableWidth: 'auto',
//        margin:{top: 10, right: 10, bottom: 10, left: 10},
//        pageBreak: 'auto',
//        styles: {
//          overflow: 'linebreak',
//          fontSize: 20,
//          columnWidth: 'auto'
//        },
//        columnStyles: {
//          1: {columnWidth: 'auto'
//          }
//        },
//        beforePageContent: function(data) {
//            doc.autoTableAddPage;
//        }
//      });
      
        var elementHandler = {
            '#ignorePDF': function (element, renderer) {
              return true;
            },
            '#ignorePDF1': function (element, renderer) {
              return true;
            },
            '#ignorePDF2': function (element, renderer) {
              return true;
            },
            '#dendrogrampan': function (element, renderer) {
              return true;
            }
        };
        var source = window.document.getElementsByTagName("body")[0];
        doc.fromHTML(
        source,
        5,
        5,
        {
          'width': 180,'elementHandlers': elementHandler
        });
            
        doc.output("dataurlnewwindow");
});

$('#grafik').on('click',function(event) {
    event.preventDefault();
    var $body = $('body');    
    $body.addClass('loading');
    $("#fact-table-grafik").replaceWith('<tbody id="fact-table-grafik"></tbody>');

    for(var i =0;i<clustersatu.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+1+"</td>";
                if (clustersatu[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clustersatu[i].totalAnak+"</td>";
                }
                if (clustersatu[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersatu[i].totalWanita+"</td>";     
                }
                if (clustersatu[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersatu[i].totalPria+"</td>";
                }
                if (clustersatu[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersatu[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clustersatu[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clusterdua.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+2+"</td>";
                if (clusterdua[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clusterdua[i].totalAnak+"</td>";
                }
                if (clusterdua[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterdua[i].totalWanita+"</td>";     
                }
                if (clusterdua[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterdua[i].totalPria+"</td>";
                }
                if (clusterdua[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterdua[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clusterdua[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clustertiga.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+3+"</td>";
                if (clustertiga[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clustertiga[i].totalAnak+"</td>";
                }
                if (clustertiga[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustertiga[i].totalWanita+"</td>";     
                }
                if (clustertiga[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustertiga[i].totalPria+"</td>";
                }
                if (clustertiga[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustertiga[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clustertiga[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clusterempat.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+4+"</td>";
                if (clusterempat[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clusterempat[i].totalAnak+"</td>";
                }
                if (clusterempat[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterempat[i].totalWanita+"</td>";     
                }
                if (clusterempat[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterempat[i].totalPria+"</td>";
                }
                if (clusterempat[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterempat[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clusterempat[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clusterlima.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+5+"</td>";
                if (clusterlima[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clusterlima[i].totalAnak+"</td>";
                }
                if (clusterlima[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterlima[i].totalWanita+"</td>";     
                }
                if (clusterlima[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterlima[i].totalPria+"</td>";
                }
                if (clusterlima[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterlima[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clusterlima[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clusterenam.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+6+"</td>";
                if (clusterenam[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clusterenam[i].totalAnak+"</td>";
                }
                if (clusterenam[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterenam[i].totalWanita+"</td>";     
                }
                if (clusterenam[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterenam[i].totalPria+"</td>";
                }
                if (clusterenam[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterenam[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clusterenam[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clustertujuh.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+7+"</td>";
                if (clustertujuh[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clustertujuh[i].totalAnak+"</td>";
                }
                if (clustertujuh[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustertujuh[i].totalWanita+"</td>";     
                }
                if (clustertujuh[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustertujuh[i].totalPria+"</td>";
                }
                if (clustertujuh[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustertujuh[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clustertujuh[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clusterdelapan.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+8+"</td>";
                if (clusterdelapan[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clusterdelapan[i].totalAnak+"</td>";
                }
                if (clusterdelapan[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterdelapan[i].totalWanita+"</td>";     
                }
                if (clusterdelapan[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterdelapan[i].totalPria+"</td>";
                }
                if (clusterdelapan[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterdelapan[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clusterdelapan[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clustersembilan.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+9+"</td>";
                if (clustersembilan[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clustersembilan[i].totalAnak+"</td>";
                }
                if (clustersembilan[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersembilan[i].totalWanita+"</td>";     
                }
                if (clustersembilan[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersembilan[i].totalPria+"</td>";
                }
                if (clustersembilan[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersembilan[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clustersembilan[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clustersepuluh.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+10+"</td>";
                if (clustersepuluh[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clustersepuluh[i].totalAnak+"</td>";
                }
                if (clustersepuluh[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersepuluh[i].totalWanita+"</td>";     
                }
                if (clustersepuluh[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersepuluh[i].totalPria+"</td>";
                }
                if (clustersepuluh[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersepuluh[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clustersepuluh[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clustersebelas.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+11+"</td>";
                if (clustersebelas[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clustersebelas[i].totalAnak+"</td>";
                }
                if (clustersebelas[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersebelas[i].totalWanita+"</td>";     
                }
                if (clustersebelas[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersebelas[i].totalPria+"</td>";
                }
                if (clustersebelas[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clustersebelas[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clustersebelas[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    for(var i =0;i<clusterduabelas.length;i++){
               //console.log(list[i].id_toko);
               var newElem = "<tr>";
               newElem += "<td>Cluster "+12+"</td>";
                if (clusterduabelas[i].totalAnak === -1022) {                
                   newElem += "<td>0</td>";
                }else{                    
                   newElem += "<td>"+clusterduabelas[i].totalAnak+"</td>";
                }
                if (clusterduabelas[i].totalWanita === -1022) {                                    
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterduabelas[i].totalWanita+"</td>";     
                }
                if (clusterduabelas[i].totalPria === -1022) {                
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterduabelas[i].totalPria+"</td>";
                }
                if (clusterduabelas[i].totalSepatu === -1022) {                                   
                   newElem += "<td>0</td>";
                }else{
                   newElem += "<td>"+clusterduabelas[i].totalSepatu+"</td>";            
                }
               newElem += "<td>"+clusterduabelas[i].umur+"</td>";
               newElem += "</tr>";
               $("#fact-table-grafik").append(newElem);    
    }
    
    var fixNewLine = {
        exportOptions: {
            format: {
                body: function ( data, column, row ) {
                // Strip $ from salary column to make it numeric
                    return column === 5 ?
                // THIS WORKS:          data.replace(/test/ig, "blablabla"):
                        data.replace( /<br\s*\/?>/ig, "\n" ) :
                        data;
            }
        }
    }
    };

    $('#table-grafik').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 
            'csv', 
            $.extend( true, {}, fixNewLine, {
                extend: 'excel'
            } ),
            'print'
        ]
    });
                
    var newElm = "<div id='container' style='width:100%; height:1000px;'></div>";    
    $("#grafikcluster").append(newElm);    
    
    itemCluster = {};
    itemScat = {};
    var total = 0.0;
    for (var i = 0; i < clustersatu.length; i++) {
            if (clustersatu[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clustersatu[i].totalAnak;            
            }
            if (clustersatu[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clustersatu[i].totalWanita;            
            }
            if (clustersatu[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clustersatu[i].totalPria;            
            }
            if (clustersatu[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clustersatu[i].totalSepatu;            
            }
            itemCluster[4]= clustersatu[i].umur;
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            
            itemScat["name"] = clustersatu[i].name;
            clustersatuscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }

    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clusterdua.length; i++) {
            if (clusterdua[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clusterdua[i].totalAnak;            
            }
            if (clusterdua[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clusterdua[i].totalWanita;            
            }
            if (clusterdua[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clusterdua[i].totalPria;            
            }
            if (clusterdua[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clusterdua[i].totalSepatu;            
            }
            itemCluster[4]= clusterdua[i].umur;                        
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clusterdua[i].name;
            clusterduascat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat = {};    
    for (var i = 0; i < clustertiga.length; i++) {
            if (clustertiga[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clustertiga[i].totalAnak;            
            }
            if (clustertiga[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clustertiga[i].totalWanita;            
            }
            if (clustertiga[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clustertiga[i].totalPria;            
            }
            if (clustertiga[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clustertiga[i].totalSepatu;            
            }
            itemCluster[4]= clustertiga[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clustertiga[i].name;
            clustertigascat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }

    itemCluster = {};
    itemScat ={};
    for (var i = 0; i < clusterempat.length; i++) {
            if (clusterempat[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clusterempat[i].totalAnak;            
            }
            if (clusterempat[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clusterempat[i].totalWanita;            
            }
            if (clusterempat[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clusterempat[i].totalPria;            
            }
            if (clusterempat[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clusterempat[i].totalSepatu;            
            }
            itemCluster[4]= clusterempat[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clusterempat[i].name;
            clusterempatscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clusterlima.length; i++) {
            if (clusterlima[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clusterlima[i].totalAnak;            
            }
            if (clusterlima[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clusterlima[i].totalWanita;            
            }
            if (clusterlima[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clusterlima[i].totalPria;            
            }
            if (clusterlima[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clusterlima[i].totalSepatu;            
            }
            itemCluster[4]= clusterlima[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clusterlima[i].name;
            clusterlimascat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat ={};
    for (var i = 0; i < clusterenam.length; i++) {
            if (clusterenam[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clusterenam[i].totalAnak;            
            }
            if (clusterenam[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clusterenam[i].totalWanita;            
            }
            if (clusterenam[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clusterenam[i].totalPria;            
            }
            if (clusterenam[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clusterenam[i].totalSepatu;            
            }
            itemCluster[4]= clusterenam[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clusterenam[i].name;
            clusterenamscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat ={};
    for (var i = 0; i < clustertujuh.length; i++) {
            if (clustertujuh[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clustertujuh[i].totalAnak;            
            }
            if (clustertujuh[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clustertujuh[i].totalWanita;            
            }
            if (clustertujuh[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clustertujuh[i].totalPria;            
            }
            if (clustertujuh[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clustertujuh[i].totalSepatu;            
            }
            itemCluster[4]= clustertujuh[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clustertujuh[i].name;
            clustertujuhscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clusterdelapan.length; i++) {
            if (clusterdelapan[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clusterdelapan[i].totalAnak;            
            }
            if (clusterdelapan[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clusterdelapan[i].totalWanita;            
            }
            if (clusterdelapan[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clusterdelapan[i].totalPria;            
            }
            if (clusterdelapan[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clusterdelapan[i].totalSepatu;            
            }
            itemCluster[4]= clusterdelapan[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clusterdelapan[i].name;
            clusterdelapanscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clustersembilan.length; i++) {
            if (clustersembilan[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clustersembilan[i].totalAnak;            
            }
            if (clustersembilan[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clustersembilan[i].totalWanita;            
            }
            if (clustersembilan[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clustersembilan[i].totalPria;            
            }
            if (clustersembilan[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clustersembilan[i].totalSepatu;            
            }
            itemCluster[4]= clustersembilan[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));            
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clustersembilan[i].name;
            clustersembilanscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clustersepuluh.length; i++) {
            if (clustersepuluh[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clustersepuluh[i].totalAnak;            
            }
            if (clustersepuluh[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clustersepuluh[i].totalWanita;            
            }
            if (clustersepuluh[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clustersepuluh[i].totalPria;            
            }
            if (clustersepuluh[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clustersepuluh[i].totalSepatu;            
            }
            itemCluster[4]= clustersepuluh[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clustersepuluh[i].name;
            clustersepuluhscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clustersebelas.length; i++) {
            if (clustersebelas[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clustersebelas[i].totalAnak;            
            }
            if (clustersebelas[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clustersebelas[i].totalWanita;            
            }
            if (clustersebelas[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clustersebelas[i].totalPria;            
            }
            if (clustersebelas[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clustersebelas[i].totalSepatu;            
            }
            itemCluster[4]= clustersebelas[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clustersebelas[i].name;
            clustersebelasscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;            
    }
    
    itemCluster = {};
    itemScat = {};
    for (var i = 0; i < clusterduabelas.length; i++) {
            if (clusterduabelas[i].totalAnak === -1022) {                
                itemCluster[0]= 0;
            }else{
                itemCluster[0]= clusterduabelas[i].totalAnak;            
            }
            if (clusterduabelas[i].totalWanita === -1022) {                
                itemCluster[1]= 0;
            }else{
                itemCluster[1]= clusterduabelas[i].totalWanita;            
            }
            if (clusterduabelas[i].totalPria === -1022) {                
                itemCluster[2]= 0;
            }else{
                itemCluster[2]= clusterduabelas[i].totalPria;            
            }
            if (clusterduabelas[i].totalSepatu === -1022) {                
                itemCluster[3]= 0;
            }else{
                itemCluster[3]= clusterduabelas[i].totalSepatu;            
            }
            itemCluster[4]= clusterduabelas[i].umur;
            itemScat["x"] = (((1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3])+((1/Math.sqrt(5))*itemCluster[4]));
            itemScat["y"] = (((-1/Math.sqrt(5))*itemCluster[0])+((1/Math.sqrt(5))*itemCluster[1])+((-1/Math.sqrt(5))*itemCluster[2])+((1/Math.sqrt(5))*itemCluster[3]));
            total = itemCluster[0]+itemCluster[1]+itemCluster[2]+itemCluster[3]+itemCluster[4];
            //itemScat["x"] = (((1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3])+((1/Math.sqrt(total))*itemCluster[4]));
            //itemScat["y"] = (((-1/Math.sqrt(total))*itemCluster[0])+((1/Math.sqrt(total))*itemCluster[1])+((-1/Math.sqrt(total))*itemCluster[2])+((1/Math.sqrt(total))*itemCluster[3]));            

            itemScat["name"] = clusterduabelas[i].name;
            clusterduabelasscat.push(itemScat);            
            itemCluster = {};
            itemScat = {};
            total = 0.0;
    }
//    console.log(clusterdelapanscat);

    $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Grafik Cluster'
            },
            subtitle: {
                text: 'Source: Heinz  2003'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Titik X'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Titik Y'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            exporting: {
                buttons: { 
                    exportButton: {
                        enabled:true
                    },
                    printButton: {
                        enabled:true
                    }

                }
            },
            plotOptions: {
                scatter: {
                    turboThreshold: 2000,
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {              
                        headerFormat:'<b>{point.key}</b><br>',
                        pointFormat: '{point.x} X, {point.y} Y'
                    }
                }
            },
            series: [{  
                name: 'Cluster I',
                color: 'rgba(223, 83, 83, .5)',
                data: clustersatuscat
            },{
                name: 'Cluster II',
                color: 'yellow',
                data: clusterduascat

            }, {
                name: 'Cluster III',
                color: 'rgba(119, 152, 191, .5)',
                data: clustertigascat
            }, {
                name: 'Cluster IV',
                color: 'green',
                data: clusterempatscat
            }, {
                name: 'Cluster V',
                color: 'black',
                data: clusterlimascat
            }, {
                name: 'Cluster VI',
                color: 'red',
                data: clusterenamscat
            }, {
                name: 'Cluster VII',
                color: 'blue',
                data: clustertujuhscat
            }, {
                name: 'Cluster VIII',
                color: 'orange',
                data: clusterdelapanscat
            }, {
                name: 'Cluster IX',
                color: 'brown',
                data: clustersembilanscat
            }, {
                name: 'Cluster X',
                color: 'pink',
                data: clustersepuluhscat
            }, {
                name: 'Cluster XI',
                color: 'grey',
                data: clustersebelasscat
            }, {
                name: 'Cluster XII',
                color: 'purple',
                data: clusterduabelasscat
            }]
    });
    $body.removeClass('loading');
    alert('Grafik telah dibuat');
});

$('#scatter').on('click',function(event) {
    event.preventDefault();
    var newElm = "<div id='container' style='width:100%; height:1000px;'></div>";
    $("#scat").append(newElm);
    
    $.post('scatter').done(function(response){
        alert('Scatter berhasil dibuat');
        var list = response;
        console.log(list);
        var keys = Create2DArray(list.length);
        var jeneng = [];
//        var keysMale = Create2DArray(list.length);
//        var keysFemale = Create2DArray(list.length);
        jsonObj = [];
        jsonObjAnak = [];
        jsonObjWanita = [];
        jsonObjPria = [];
        jsonObjSepatu = [];                
//        jsonObjFemale = [];
//        jsonObjMale = [];

        for (var i = 0; i < list.length; i++) {
//            jeneng[i] = list[i].no_bon;
            keys[i][0] = list[i].strip;
            keys[i][1] = list[i].umur;
            keys[i][2] = list[i].no_bon;

            itemAnak = {};
            itemWanita = {};
            itemPria = {};
            itemSepatu = {};

            for (var d = 0; d < list[i].strip.length; d++) {
                if (d===0) {
                    itemAnak ["x"] = list[i].strip[d].jumlah;                    
                    itemAnak ["y"] = list[i].umur;
                    itemAnak ["name"] = list[i].no_bon;            
                }else if (d===1) {
                    itemWanita ["x"] = list[i].strip[d].jumlah;                   
                    itemWanita ["y"] = list[i].umur;
                    itemWanita ["name"] = list[i].no_bon;
                                
                }else if (d===2) {
                    itemPria ["x"] = list[i].strip[d].jumlah;                    
                    itemPria ["y"] = list[i].umur;
                    itemPria ["name"] = list[i].no_bon;
                            
                }else if (d===3) {
                    itemSepatu ["x"] = list[i].strip[d].jumlah;                  
                    itemSepatu ["y"] = list[i].umur;
                    itemSepatu ["name"] = list[i].no_bon;            
                }
            }
            jsonObjAnak.push(itemAnak);
            jsonObjWanita.push(itemWanita);
            jsonObjPria.push(itemPria);
            jsonObjSepatu.push(itemSepatu);
        }
        
        $('#container').highcharts({
            chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Persebaran Bon Berdasar Umur dan Strip di Ritel Perusahaan X'
                },
                subtitle: {
                    text: 'Source: Heinz  2003'
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: 'Jumlah Strip'
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Umur'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                    borderWidth: 1
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)'
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false
                                }
                            }
                        },
                        tooltip: {              
                            headerFormat:'<b>{point.key}</b><br>',
                            pointFormat: '{point.x} total strip, {point.y} tahun'
                        }
                    }
                },
                series: [{  
                    name: 'Anak',
                    color: 'rgba(223, 83, 83, .5)',
                    data: jsonObjAnak
                },{
                    name: 'Wanita',
                    color: 'yellow',
                    data: jsonObjWanita

                }, {
                    name: 'Pria',
                    color: 'rgba(119, 152, 191, .5)',
                    data: jsonObjPria
                }, {
                    name: 'Sepatu',
                    color: 'green',
                    data: jsonObjSepatu
                }]
            });
        });
    
    
});


    var confirmed = false;
    $(function () {
        /* Search functionality */
        var oTable = $('.modelsearch').dataTable({
            "bPaginate":false,
            "bLengthChange":false,
            "bFilter":true,
            "bSort":false,
            "bInfo":false,
            "bAutoWidth":false,
            "bStateSave":false
        });
        $("thead input").keyup(function () {
            /* Filter on the column (the index) of this element */
            oTable.fnFilter(this.value, $("thead input").index(this));
        });

        $("thead input").focus(function () {
            if (this.className == "search_init") {
                this.className = "";
                this.value = "";
            }
        });

        $("thead input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("thead input").index(this)];
            }
        });
    });
  

/*
function pca(X) {

    var m = X.length;
    var sigma = numeric.div(numeric.dot(numeric.transpose(X), X), m);
    return numeric.svd(sigma).U;
}

function pcaReduce(U, k) {

    return U.map(function(row) {
        return row.slice(0, k)
    });
}

function pcaProject(X, Ureduce) {

    return numeric.dot(X, Ureduce);
}

function pcaRecover(Z, Ureduce) {

    return numeric.dot(Z, numeric.transpose(Ureduce));
}
                 
window.onload = function() {
    var x, y, X = [];
    
    var noise = function() {return Math.random() * 0.02 - 0.01};
    
    // Create random dataset with slope of 0.357 and noise
    for (var i = 0; i < 1000; i++) {
        x = Math.random() * 2 - 1;
        y = x * 0.357;
        X.push([x + noise(), y + noise()]);
    }
    
    // Get principle components
    var U = pca(X);
    
    // Print slope of first principle component
    document.write(Math.abs(U[0][1] / U[0][0]).toFixed(3));
};*/