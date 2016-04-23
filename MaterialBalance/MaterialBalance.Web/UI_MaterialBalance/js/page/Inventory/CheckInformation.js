var m_Organization = "";

$(function () {
    InitDate();
    loadDataGrid("first");
});
function onOrganisationTreeClick(node) {
    $('#productLineName').textbox('setText', node.text);
    m_Organization = node.OrganizationId;
    $('#organizationId').val(node.OrganizationId);
}
function InitDate() {
    var nowDate = new Date();
    var beforeDate = new Date();
    beforeDate.setDate(nowDate.getDate() - 10);
    var nowString = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + " " + nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds();
    //var beforeString = beforeDate.getFullYear() + '-' + (beforeDate.getMonth() + 1) + '-' + beforeDate.getDate() + " 00:00:00";
    $('#startDate').datetimebox('setValue', nowString);
}
function loadDataGrid(type, myData) {
    if (type == "first") {
        $('#gridMain_CheckInformation').datagrid({
            columns: [[
                    { field: '1', title: '物料库名称', width: 100 },
                    { field: '2', title: '描述', width: 50, align: "center" },
                    { field: '3', title: '类别', width: 50, align: "center" },
                    { field: '4', title: '物料类型', width: 100, align: "center" },
                    { field: '5', title: '容积', width: 50, align: "center" },
                    { field: '6', title: '长', width: 40, align: "center" },
                    { field: '7', title: '宽', width: 40, align: "center" },
                    { field: '8', title: '高', width: 40, align: "center" },
                    { field: '9', title: '盘库前实物库存', width: 120},
                    { field: '10', title: '盘库后实物库存', width: 120 },
                    { field: '11', title: '盘库时间', width: 100 },
                    { field: '12', title: '盘库人员', width: 100, align: "center" },
                    { field: '13', title: '备注', width: 50, align: "center" }
            ]],
            fit: true,
            toolbar: "#toolbar_CheckInformation",
            rownumbers: true,
            singleSelect: true,
            striped: true,
            data: [],
            idField: "id",
            treeField: "EquipmentName"
        })
    }
    else {
        $('#gridMain_CheckInformation').datagrid("loadData", myData);
    }
}
function QueryCheckInformation() {
    if (m_Organization == "") {
        $.messager.alert('提示', '请选择组织结构！', 'info');
    } else {
        $.messager.alert('提示', '未查询到数据', 'info');
    }
}
