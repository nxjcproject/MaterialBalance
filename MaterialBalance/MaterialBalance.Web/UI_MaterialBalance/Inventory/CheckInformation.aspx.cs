﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaterialBalance.Web.UI_MaterialBalance.Inventory
{
    public partial class CheckInformation : WebStyleBaseForEnergy.webStyleBase
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
                  this.OrganisationTree_ProductionLine.Organizations = GetDataValidIdGroup("ProductionOrganization");                         //向web用户控件传递数据授权参数
                  this.OrganisationTree_ProductionLine.PageName = "CheckInformation.aspx";   //向web用户控件传递当前调用的页面名称
                  //this.OrganisationTree_ProductionLine.LeveDepth = 7;
              }
        }
    }
}