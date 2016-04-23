var m_InOrganization = "";
var m_OutOrganization = "";
$(function () {
    InitDate();
    LoadOrganizationData();
    loadDataGrid("first");
});
function LoadOrganizationData() {
    $.ajax({
        type: "POST",
        url: "Materialrecords.aspx/GetOrganizationData",
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var m_MsgData = jQuery.parseJSON(msg.d);
            $('#InOrganization').combotree({
                data: m_MsgData,
                dataType: "json",
                valueField: 'id',
                textField: 'text',
                required: false,
                panelHeight: 'auto',
                editable: false,
                onSelect: function (para) {
                    m_InOrganization = para.id;
                }
            });
            $('#OutOrganization').combotree({
                data: m_MsgData,
                dataType: "json",
                valueField: 'id',
                textField: 'text',
                required: false,
                panelHeight: 'auto',
                editable: false,
                onSelect: function (para) {
                    m_OutOrganization = para.id;
                }
            });
        }, error: function () {
            $.messager.alert('提示','加载组织机构失败！','info');
        }
    });
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
        $('#gridMain_Materialrecords').datagrid({
            columns: [[{ field: '00', title: '日期', width: 40, rowspan: 2,colspan:1 },
                { field: '01', title: '日期', width: 40, colspan: 3, align: "center" },
                { field: '02', title: '日期', width: 40, colspan: 3, align: "center" },

            ],[
                { field: '1', title: '组织机构', width: 100 },
                { field: '2', title: '仓库名称', width: 100, align: "center" },
                { field: '3', title: '实物总量', width: 100, align: "center" },
                { field: '4', title: '组织机构', width: 100, align: "center" },
                { field: '5', title: '仓库名称', width: 100, align: "center" },
                { field: '6', title: '实物总量', width: 100, align: "center" }
            ]],
            //fit: true,
            toolbar: "#toolbar_Materialrecords",
            rownumbers: true,
            singleSelect: true,
            striped: true,
            data: []
            //,
            //idField: "id",
            //treeField: "EquipmentName"
        })
    }
    else {
        $('#gridMain_Materialrecords').datagrid("loadData", myData);
    }
}
function QueryMaterialrecords() {
    if (m_InOrganization == "" || m_OutOrganization=="") {
        $.messager.alert('提示', '请选择出厂、入厂组织机构！', 'info');
    } else {
        $.messager.alert('提示', '未查询到数据', 'info');
    }
}
