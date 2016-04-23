<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Materialrecords.aspx.cs" Inherits="MaterialBalance.Web.UI_MaterialBalance.Materialrecords" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>物料进出厂</title>
    <link rel="stylesheet" type="text/css" href="/lib/ealib/themes/gray/easyui.css" />
    <link rel="stylesheet" type="text/css" href="/lib/ealib/themes/icon.css" />
    <link rel="stylesheet" type="text/css" href="/lib/extlib/themes/syExtIcon.css" />

    <script type="text/javascript" src="/lib/ealib/jquery.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="/lib/ealib/jquery.easyui.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="/lib/ealib/easyui-lang-zh_CN.js" charset="utf-8"></script>

    <!--[if lt IE 8 ]><script type="text/javascript" src="/js/common/json2.min.js"></script><![endif]-->
    <script type="text/javascript" src="/lib/ealib/extend/jquery.PrintArea.js" charset="utf-8"></script>
    <script type="text/javascript" src="/lib/ealib/extend/jquery.jqprint.js" charset="utf-8"></script>

    <script type="text/javascript" src="js/page/Materialrecords.js"charset="utf-8"></script>
</head>
<body>
     <div class="easyui-layout" data-options="fit:true,border:false">
        <!-- 图表开始 -->
        <div id="toolbar_Materialrecords" style="display: none;">
            <table>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td  style="width:60px">选择时间：</td>
                                <td >
                                    <input id="startDate" type="text" class="easyui-datetimebox" required="required" style="width: 150px;" />
                                </td>  
                                <td style="width:90px"> 进厂组织结构：</td>
                                <td>
                                    <input id="InOrganization" class="easyui-combotree" style="width: 160px;" />
                                </td>  
                                 <td style="width:90px"> 出厂组织机构：</td>
                                <td>
                                    <input id="OutOrganization" class="easyui-combotree" style="width: 160px;"/>
                                </td>                                                                                                      
                                <td class="queryDate"><a href="javascript:void(0);" class="easyui-linkbutton" data-options="iconCls:'icon-search',plain:true"
                                    onclick="QueryMaterialrecords();">查询</a>
                                </td>               
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table>                            
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <div id="reportTable" class="easyui-panel" data-options="region:'center', border:true, collapsible:true, split:false">
            <table id="gridMain_Materialrecords"></table>
        </div>
        <!-- 图表结束 -->
    </div>

    <form id="form1" runat="server">
    <div>   
    </div>
    </form>
</body>
</html>
