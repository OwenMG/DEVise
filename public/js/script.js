new Chartist.Line('#progress-chart', {
    labels: ['January', 'Februrary', 'March', 'April', 'May', 'June'],
    series: [
      [10, 12, 35, 39, 53, 68]
    ]
  }, {
  low: 0,
  showArea: true
});

//Script that was to be used for interactive table, decided to delete this feature
// $(document).ready(function(){
// 	$('[data-toggle="tooltip"]').tooltip();
// 	var actions = $("table td:last-child").html();
	
//     $(".add-new").click(function(){
// 		$(this).attr("disabled", "disabled");
// 		var index = $("table tbody tr:last-child").index();
//         var row = '<tr>' +
//             '<td><input type="text" class="form-control" name="name" id="name"></td>' +
//             '<td><input type="text" class="form-control" name="department" id="department"></td>' +
//             '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
// 			'<td>' + actions + '</td>' +
//         '</tr>';
//     	$("table").append(row);		
// 		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
//         $('[data-toggle="tooltip"]').tooltip();
//     });
	
// 	$(document).on("click", ".add", function(){
// 		var empty = false;
// 		var input = $(this).parents("tr").find('input[type="text"]');
//         input.each(function(){
// 			if(!$(this).val()){
// 				$(this).addClass("error");
// 				empty = true;
// 			} else{
//                 $(this).removeClass("error");
//             }
// 		});
// 		$(this).parents("tr").find(".error").first().focus();
// 		if(!empty){
// 			input.each(function(){
// 				$(this).parent("td").html($(this).val());
// 			});			
// 			$(this).parents("tr").find(".add, .edit").toggle();
// 			$(".add-new").removeAttr("disabled");
// 		}		
//     });
	
// 	$(document).on("click", ".edit", function(){		
//         $(this).parents("tr").find("td:not(:last-child)").each(function(){
// 			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
// 		});		
// 		$(this).parents("tr").find(".add, .edit").toggle();
// 		$(".add-new").attr("disabled", "disabled");
//     });
	
// 	$(document).on("click", ".delete", function(){
//         $(this).parents("tr").remove();
// 		$(".add-new").removeAttr("disabled");
//     });
// });
