var m_Organization = "";

$(function () {
    loadDataGrid("first");
});
function onOrganisationTreeClick(node) {
    $('#productLineName').textbox('setText', node.text);
    m_Organization = node.OrganizationId;
    $('#organizationId').val(node.OrganizationId);
}
function loadDataGrid(type, myData) {
    if (type == "first") {
        $('#gridMain_MaterialLibrary').datagrid({
            columns: [[
                    { field: '1', title: '物料库名称', width: 100 },
                    { field: '2', title: '描述', width: 50, align: "center" },
                    { field: '3', title: '类别', width: 50, align: "center" },
                    { field: '4', title: '物料类型', width: 100, align: "center" },
                    { field: '5', title: '容积', width: 50 ,align: "center" },
                    { field: '6', title:'长', width: 30, align: "center" },
                    { field: '7', title: '宽', width: 30, align: "center" },
                    { field: '8', title: '高', width: 30, align: "center" },
                    { field: '9', title: '容重', width: 50, align: "center" },
                    { field: '10', title: '公式计算', width: 100 },
                    { field: '11', title: '厂区位置', width: 100 },
                    { field: '12', title: '形状', width: 50, align: "center" },
                    { field: '13', title: '当前库存量', width: 100, align: "center" },
                    { field: '14', title: '备注', width: 50, align: "center" }
            ]],
            fit: true,
            toolbar: "#toolbar_MaterialLibrary",
            rownumbers: true,
            singleSelect: true,
            striped: true,
            data: [],
            idField: "id",
            treeField: "EquipmentName"
        })
    }
    else {
        $('#gridMain_MaterialLibrary').datagrid("loadData", myData);
    }
}
function QueryMaterialLibrary()
{
    if (m_Organization == "") {
        $.messager.alert('提示', '请选择组织结构！', 'info');
    } else {
        $.messager.alert('提示', '未查询到数据', 'info');
    }
}