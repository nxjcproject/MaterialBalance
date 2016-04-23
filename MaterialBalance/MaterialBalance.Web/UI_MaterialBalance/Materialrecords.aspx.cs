using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaterialBalance.Web.UI_MaterialBalance
{
    public partial class Materialrecords : WebStyleBaseForEnergy.webStyleBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            base.InitComponts();
            if (!IsPostBack)
            {
#if DEBUG
                ////////////////////调试用,自定义的数据授权
                List<string> m_DataValidIdItems = new List<string>() { "zc_nxjc_byc_byf" };
                AddDataValidIdGroup("ProductionOrganization", m_DataValidIdItems);
#elif RELEASE
#endif
                //this.OrganisationTree_ProductionLine.Organizations = GetDataValidIdGroup("ProductionOrganization");                         //向web用户控件传递数据授权参数
                //this.OrganisationTree_ProductionLine.PageName = "Materialrecords.aspx";   //向web用户控件传递当前调用的页面名称
            }
        }
        [WebMethod]
        public static string GetOrganizationData()
        {
            string[] temArr = { "熟料", "水泥磨", "余热发电" };
            List<string> typeItems = new List<string>(temArr);
            DataTable m_DcsOrganization = WebUserControls.Service.OrganizationSelector.OrganisationTree.GetOrganisationTree(GetDataValidIdGroup("ProductionOrganization"), "", typeItems, 7, true);
            return EasyUIJsonParser.TreeJsonParser.DataTableToJsonByLevelCodeWithIdColumn(m_DcsOrganization, "LevelCode", "OrganizationID", "Name");
        }
    }
}