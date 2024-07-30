$(document).ready(function() {
    $(".add").click(function() {
        let type = $(".type").val();
        let name = $(".name").val();
        let amount = $(".amount").val();

        if (type && name && amount) {
            $(".first").after(`
                <tr>
                    <td>${type}</td>
                    <td>${name}</td>
                    <td>${amount}</td>
                    <td><button class="delete" style = "background-color:red; width: 70px;height: 30px;">Delete</button></td>
                </tr>
            `);
            $(".type").val("");
            $(".name").val("");
            $(".amount").val("");
        } else {
            alert("Please fill out all fields.");
        }
    });
    $(document).on("click", ".delete", function() {
        $(this).closest("tr").remove();
    });
});