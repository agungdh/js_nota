function beli(id) {
	var nama = $("#"+id).find("td").eq(1).text();
	var harga = $("#"+id).find("td").eq(2).text();
	var jumlah_beli = $("#jumlah_beli_"+id).val();
	var jumlah_harga = $("#jumlah_beli_"+id).val() * $("#"+id).find("td").eq(2).text();
	// console.log(
	// 	$("#"+id).find("td").eq(0).text()
	// );
	// console.log(
	// 	$("#"+id).find("td").eq(1).text()
	// );
	// console.log(
	// 	$("#"+id).find("td").eq(2).text()
	// );
	// console.log(
	// 	$("#jumlah_beli_"+id).val()
	// );
	// console.log(
	// 	$("#jumlah_beli_"+id).val() * $("#"+id).find("td").eq(2).text()
	// );
	
	// $("#id .class").text();
	var data =
	'<tr id="nota' + id + '">' +
	'<td>-</td>' + 
	'<td>' + nama + '</td>' + 
	'<td>' + harga + '</td>' + 
	'<td>' + jumlah_harga + '</td>' + 
	'<td>' + '<button type="button" id="hapus" onclick="hapus($(this).parent().parent().prop(' + "\'id\'" + '))">Hapus</button>' + '</td>' + 
	+ '</tr>';

	$("#nota tbody").append(data);
}

function hapus(id) {
	$('#'+id).remove();
	// console.log(id);
}

$(document).ready(
    function() {
        // init();
    }
);