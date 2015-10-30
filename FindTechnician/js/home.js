// D_MP_ASINS

function popult_mp_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_mp = new XMLHttpRequest();
    xmlhttp_exec_mp = new XMLHttpRequest();
    xmlhttp_error_mp = new XMLHttpRequest();
    xmlhttp_success_mp = new XMLHttpRequest();
    xmlhttp_total_mp = new XMLHttpRequest();
    xmlhttp_eta_mp = new XMLHttpRequest();
    xmlhttp_stm_mp = new XMLHttpRequest();

  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_mp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_mp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_mp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_mp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_mp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_mp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_mp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_mp.onreadystatechange = function() {
    if (xmlhttp_wfr_mp.readyState == 4) {
      var MPobj = $.parseJSON(xmlhttp_wfr_mp.responseText);
      $('#MP_WFR').text(MPobj.WFR);

      if (MPobj.WFR != 0) {
        $("#MP_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_mp.open("GET", "cgi/table_status_wfr.cgi?table=D_MP_ASINS",
      true);
  xmlhttp_wfr_mp.send();

  xmlhttp_exec_mp.onreadystatechange = function() {
    if (xmlhttp_exec_mp.readyState == 4) {
      var MPobj = $.parseJSON(xmlhttp_exec_mp.responseText);
      $('#MP_EXEC').text(MPobj.EXEC);

      if (MPobj.EXEC != 0) {
        $("#MP_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_mp.open("GET", "cgi/table_status_exec.cgi?table=D_MP_ASINS",
      true);
  xmlhttp_exec_mp.send();

  xmlhttp_error_mp.onreadystatechange = function() {
    if (xmlhttp_error_mp.readyState == 4) {
      var MPobj = $.parseJSON(xmlhttp_error_mp.responseText);
      $('#MP_ERROR').text(MPobj.ERROR);

      if (MPobj.ERROR != 0) {
        $("#MP_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_mp.open("GET", "cgi/table_status_error.cgi?table=D_MP_ASINS",
      true);
  xmlhttp_error_mp.send();

  xmlhttp_success_mp.onreadystatechange = function() {
    if (xmlhttp_success_mp.readyState == 4) {
      var MPobj = $.parseJSON(xmlhttp_success_mp.responseText);
      $('#MP_SUCCESS').text(MPobj.SUCCESS);

      if (MPobj.SUCCESS != 0) {
        $("#MP_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_mp.open("GET",
      "cgi/table_status_success.cgi?table=D_MP_ASINS", true);
  xmlhttp_success_mp.send();

  xmlhttp_eta_mp.onreadystatechange = function() {
    if (xmlhttp_eta_mp.readyState == 4) {
      var MPobj = $.parseJSON(xmlhttp_eta_mp.responseText);
      $('#MP_ETA').text(MPobj.ETA);

    }
  };
  xmlhttp_eta_mp.open("GET", "cgi/table_ETA.cgi?table=D_MP_ASINS", true);
  xmlhttp_eta_mp.send();

  xmlhttp_stm_mp.onreadystatechange = function() {
    if (xmlhttp_stm_mp.readyState == 4) {
      var MPobj = $.parseJSON(xmlhttp_stm_mp.responseText);
      $('#MP_STMISS').text(MPobj.STMiss);

      if (MPobj.STMiss != 0) {
        $("#MP_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_mp.open("GET", "cgi/table_STMiss.cgi?table=D_MP_ASINS", true);
  xmlhttp_stm_mp.send();
}

// D_DAILY_ASIN_ACTIVITY
function popult_ddaa_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_ddaa = new XMLHttpRequest();
    xmlhttp_exec_ddaa = new XMLHttpRequest();
    xmlhttp_error_ddaa = new XMLHttpRequest();
    xmlhttp_success_ddaa = new XMLHttpRequest();
    xmlhttp_total_ddaa = new XMLHttpRequest();
    xmlhttp_eta_ddaa = new XMLHttpRequest();
    xmlhttp_stm_ddaa = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_ddaa = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_ddaa.onreadystatechange = function() {
    if (xmlhttp_wfr_ddaa.readyState == 4) {
      var DDAAobj = $.parseJSON(xmlhttp_wfr_ddaa.responseText);
      $('#DDAA_WFR').text(DDAAobj.WFR);

      if (DDAAobj.WFR != 0) {
        $("#DDAA_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_ddaa.open("GET",
      "cgi/table_status_wfr.cgi?table=D_DAILY_ASIN_ACTIVITY", true);
  xmlhttp_wfr_ddaa.send();

  xmlhttp_exec_ddaa.onreadystatechange = function() {
    if (xmlhttp_exec_ddaa.readyState == 4) {
      var DDAAobj = $.parseJSON(xmlhttp_exec_ddaa.responseText);
      $('#DDAA_EXEC').text(DDAAobj.EXEC);

      if (DDAAobj.EXEC != 0) {
        $("#DDAA_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_ddaa.open("GET",
      "cgi/table_status_exec.cgi?table=D_DAILY_ASIN_ACTIVITY", true);
  xmlhttp_exec_ddaa.send();

  xmlhttp_error_ddaa.onreadystatechange = function() {
    if (xmlhttp_error_ddaa.readyState == 4) {
      var DDAAobj = $.parseJSON(xmlhttp_error_ddaa.responseText);
      $('#DDAA_ERROR').text(DDAAobj.ERROR);

      if (DDAAobj.ERROR != 0) {
        $("#DDAA_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_ddaa.open("GET",
      "cgi/table_status_error.cgi?table=D_DAILY_ASIN_ACTIVITY", true);
  xmlhttp_error_ddaa.send();

  xmlhttp_success_ddaa.onreadystatechange = function() {
    if (xmlhttp_success_ddaa.readyState == 4) {
      var DDAAobj = $.parseJSON(xmlhttp_success_ddaa.responseText);
      $('#DDAA_SUCCESS').text(DDAAobj.SUCCESS);

      if (DDAAobj.SUCCESS != 0) {
        $("#DDAA_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_ddaa.open("GET",
      "cgi/table_status_success.cgi?table=D_DAILY_ASIN_ACTIVITY", true);
  xmlhttp_success_ddaa.send();

  xmlhttp_eta_ddaa.onreadystatechange = function() {
    if (xmlhttp_eta_ddaa.readyState == 4) {
      var DDAAobj = $.parseJSON(xmlhttp_eta_ddaa.responseText);
      $('#DDAA_ETA').text(DDAAobj.ETA);

    }
  };
  xmlhttp_eta_ddaa.open("GET",
      "cgi/table_ETA.cgi?table=D_DAILY_ASIN_ACTIVITY", true);
  xmlhttp_eta_ddaa.send();

  xmlhttp_stm_ddaa.onreadystatechange = function() {
    if (xmlhttp_stm_ddaa.readyState == 4) {
      var DDAAobj = $.parseJSON(xmlhttp_stm_ddaa.responseText);
      $('#DDAA_STMISS').text(DDAAobj.STMiss);

      if (DDAAobj.STMiss != 0) {
        $("#DDAA_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_ddaa.open("GET",
      "cgi/table_STMiss.cgi?table=D_DAILY_ASIN_ACTIVITY", true);
  xmlhttp_stm_ddaa.send();
}

// W_QTD_UNITS_SERVED_DLD
function popult_wqtd_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_wqtd = new XMLHttpRequest();
    xmlhttp_exec_wqtd = new XMLHttpRequest();
    xmlhttp_error_wqtd = new XMLHttpRequest();
    xmlhttp_success_wqtd = new XMLHttpRequest();
    xmlhttp_total_wqtd = new XMLHttpRequest();
    xmlhttp_eta_wqtd = new XMLHttpRequest();
    xmlhttp_stm_wqtd = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_wqtd = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_wqtd.onreadystatechange = function() {
    if (xmlhttp_wfr_wqtd.readyState == 4) {
      var WQTDobj = $.parseJSON(xmlhttp_wfr_wqtd.responseText);
      $('#WQTD_WFR').text(WQTDobj.WFR);

      if (WQTDobj.WFR != 0) {
        $("#WQTD_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_wqtd.open("GET",
      "cgi/table_status_wfr.cgi?table=W_QTD_UNITS_SERVED_DLD", true);
  xmlhttp_wfr_wqtd.send();

  xmlhttp_exec_wqtd.onreadystatechange = function() {
    if (xmlhttp_exec_wqtd.readyState == 4) {
      var WQTDobj = $.parseJSON(xmlhttp_exec_wqtd.responseText);
      $('#WQTD_EXEC').text(WQTDobj.EXEC);

      if (WQTDobj.EXEC != 0) {
        $("#WQTD_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_wqtd.open("GET",
      "cgi/table_status_exec.cgi?table=W_QTD_UNITS_SERVED_DLD", true);
  xmlhttp_exec_wqtd.send();

  xmlhttp_error_wqtd.onreadystatechange = function() {
    if (xmlhttp_error_wqtd.readyState == 4) {
      var WQTDobj = $.parseJSON(xmlhttp_error_wqtd.responseText);
      $('#WQTD_ERROR').text(WQTDobj.ERROR);

      if (WQTDobj.ERROR != 0) {
        $("#WQTD_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_wqtd.open("GET",
      "cgi/table_status_error.cgi?table=W_QTD_UNITS_SERVED_DLD", true);
  xmlhttp_error_wqtd.send();

  xmlhttp_success_wqtd.onreadystatechange = function() {
    if (xmlhttp_success_wqtd.readyState == 4) {
      var WQTDobj = $.parseJSON(xmlhttp_success_wqtd.responseText);
      $('#WQTD_SUCCESS').text(WQTDobj.SUCCESS);

      if (WQTDobj.SUCCESS != 0) {
        $("#WQTD_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_wqtd.open("GET",
      "cgi/table_status_success.cgi?table=W_QTD_UNITS_SERVED_DLD", true);
  xmlhttp_success_wqtd.send();

  xmlhttp_eta_wqtd.onreadystatechange = function() {
    if (xmlhttp_eta_wqtd.readyState == 4) {
      var WQTDobj = $.parseJSON(xmlhttp_eta_wqtd.responseText);
      $('#WQTD_ETA').text(WQTDobj.ETA);

    }
  };
  xmlhttp_eta_wqtd.open("GET",
      "cgi/table_ETA.cgi?table=W_QTD_UNITS_SERVED_DLD", true);
  xmlhttp_eta_wqtd.send();

  xmlhttp_stm_wqtd.onreadystatechange = function() {
    if (xmlhttp_stm_wqtd.readyState == 4) {
      var WQTDobj = $.parseJSON(xmlhttp_stm_wqtd.responseText);
      $('#WQTD_STMISS').text(WQTDobj.STMiss);

      if (WQTDobj.STMiss != 0) {
        $("#WQTD_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_wqtd.open("GET",
      "cgi/table_STMiss.cgi?table=W_QTD_UNITS_SERVED_DLD", true);
  xmlhttp_stm_wqtd.send();

}

// D_AMAZON_STANDARD_ITEMS

function popult_std_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_std = new XMLHttpRequest();
    xmlhttp_exec_std = new XMLHttpRequest();
    xmlhttp_error_std = new XMLHttpRequest();
    xmlhttp_success_std = new XMLHttpRequest();
    xmlhttp_total_std = new XMLHttpRequest();
    xmlhttp_eta_std = new XMLHttpRequest();
    xmlhttp_stm_std = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_std = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_std = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_std = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_std = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_std = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_std = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_std = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_std.onreadystatechange = function() {
    if (xmlhttp_wfr_std.readyState == 4) {
      var STDobj = $.parseJSON(xmlhttp_wfr_std.responseText);
      $('#STD_WFR').text(STDobj.WFR);

      if (STDobj.WFR != 0) {
        $("#STD_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_std.open("GET",
      "cgi/table_status_wfr.cgi?table=D_AMAZON_STANDARD_ITEMS", true);
  xmlhttp_wfr_std.send();

  xmlhttp_exec_std.onreadystatechange = function() {
    if (xmlhttp_exec_std.readyState == 4) {
      var STDobj = $.parseJSON(xmlhttp_exec_std.responseText);
      $('#STD_EXEC').text(STDobj.EXEC);

      if (STDobj.EXEC != 0) {
        $("#STD_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_std.open("GET",
      "cgi/table_status_exec.cgi?table=D_AMAZON_STANDARD_ITEMS", true);
  xmlhttp_exec_std.send();

  xmlhttp_error_std.onreadystatechange = function() {
    if (xmlhttp_error_std.readyState == 4) {
      var STDobj = $.parseJSON(xmlhttp_error_std.responseText);
      $('#STD_ERROR').text(STDobj.ERROR);

      if (STDobj.ERROR != 0) {
        $("#STD_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_std.open("GET",
      "cgi/table_status_error.cgi?table=D_AMAZON_STANDARD_ITEMS", true);
  xmlhttp_error_std.send();

  xmlhttp_success_std.onreadystatechange = function() {
    if (xmlhttp_success_std.readyState == 4) {
      var STDobj = $.parseJSON(xmlhttp_success_std.responseText);
      $('#STD_SUCCESS').text(STDobj.SUCCESS);

      if (STDobj.SUCCESS != 0) {
        $("#STD_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_std.open("GET",
      "cgi/table_status_success.cgi?table=D_AMAZON_STANDARD_ITEMS", true);
  xmlhttp_success_std.send();

  xmlhttp_eta_std.onreadystatechange = function() {
    if (xmlhttp_eta_std.readyState == 4) {
      var STDobj = $.parseJSON(xmlhttp_eta_std.responseText);
      $('#STD_ETA').text(STDobj.ETA);

    }
  };
  xmlhttp_eta_std.open("GET",
      "cgi/table_ETA.cgi?table=D_AMAZON_STANDARD_ITEMS", true);
  xmlhttp_eta_std.send();

  xmlhttp_stm_std.onreadystatechange = function() {
    if (xmlhttp_stm_std.readyState == 4) {
      var STDobj = $.parseJSON(xmlhttp_stm_std.responseText);
      $('#STD_STMISS').text(STDobj.STMiss);

      if (STDobj.STMiss != 0) {
        $("#STD_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_std.open("GET",
      "cgi/table_STMiss.cgi?table=D_AMAZON_STANDARD_ITEMS", true);
  xmlhttp_stm_std.send();
}

// D_GL_PRODUCT_LINES

function popult_glp_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_glp = new XMLHttpRequest();
    xmlhttp_exec_glp = new XMLHttpRequest();
    xmlhttp_error_glp = new XMLHttpRequest();
    xmlhttp_success_glp = new XMLHttpRequest();
    xmlhttp_total_glp = new XMLHttpRequest();
    xmlhttp_eta_glp = new XMLHttpRequest();
    xmlhttp_stm_glp = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_glp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_glp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_glp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_glp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_glp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_glp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_glp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_glp.onreadystatechange = function() {
    if (xmlhttp_wfr_glp.readyState == 4) {
      var GLPobj = $.parseJSON(xmlhttp_wfr_glp.responseText);
      $('#GLP_WFR').text(GLPobj.WFR);

      if (GLPobj.WFR != 0) {
        $("#GLP_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_glp.open("GET",
      "cgi/table_status_wfr.cgi?table=D_GL_PRODUCT_LINES", true);
  xmlhttp_wfr_glp.send();

  xmlhttp_exec_glp.onreadystatechange = function() {
    if (xmlhttp_exec_glp.readyState == 4) {
      var GLPobj = $.parseJSON(xmlhttp_exec_glp.responseText);
      $('#GLP_EXEC').text(GLPobj.EXEC);

      if (GLPobj.EXEC != 0) {
        $("#GLP_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_glp.open("GET",
      "cgi/table_status_exec.cgi?table=D_GL_PRODUCT_LINES", true);
  xmlhttp_exec_glp.send();

  xmlhttp_error_glp.onreadystatechange = function() {
    if (xmlhttp_error_glp.readyState == 4) {
      var GLPobj = $.parseJSON(xmlhttp_error_glp.responseText);
      $('#GLP_ERROR').text(GLPobj.ERROR);

      if (GLPobj.ERROR != 0) {
        $("#GLP_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_glp.open("GET",
      "cgi/table_status_error.cgi?table=D_GL_PRODUCT_LINES", true);
  xmlhttp_error_glp.send();

  xmlhttp_success_glp.onreadystatechange = function() {
    if (xmlhttp_success_glp.readyState == 4) {
      var GLPobj = $.parseJSON(xmlhttp_success_glp.responseText);
      $('#GLP_SUCCESS').text(GLPobj.SUCCESS);

      if (GLPobj.SUCCESS != 0) {
        $("#GLP_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_glp.open("GET",
      "cgi/table_status_success.cgi?table=D_GL_PRODUCT_LINES", true);
  xmlhttp_success_glp.send();

  xmlhttp_eta_glp.onreadystatechange = function() {
    if (xmlhttp_eta_glp.readyState == 4) {
      var GLPobj = $.parseJSON(xmlhttp_eta_glp.responseText);
      $('#GLP_ETA').text(GLPobj.ETA);

    }
  };
  xmlhttp_eta_glp.open("GET", "cgi/table_ETA.cgi?table=D_GL_PRODUCT_LINES",
      true);
  xmlhttp_eta_glp.send();

  xmlhttp_stm_glp.onreadystatechange = function() {
    if (xmlhttp_stm_glp.readyState == 4) {
      var GLPobj = $.parseJSON(xmlhttp_stm_glp.responseText);
      $('#GLP_STMISS').text(GLPobj.STMiss);

      if (GLPobj.STMiss != 0) {
        $("#GLP_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_glp.open("GET",
      "cgi/table_STMiss.cgi?table=D_GL_PRODUCT_LINES", true);
  xmlhttp_stm_glp.send();
}

// D_BACKLOG_DEMAND

function popult_bd_count() {
  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_bd = new XMLHttpRequest();
    xmlhttp_exec_bd = new XMLHttpRequest();
    xmlhttp_error_bd = new XMLHttpRequest();
    xmlhttp_success_bd = new XMLHttpRequest();
    xmlhttp_total_bd = new XMLHttpRequest();
    xmlhttp_eta_bd = new XMLHttpRequest();
    xmlhttp_stm_bd = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_bd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_bd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_bd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_bd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_bd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_bd = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_bd = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_bd.onreadystatechange = function() {
    if (xmlhttp_wfr_bd.readyState == 4) {
      var BDobj = $.parseJSON(xmlhttp_wfr_bd.responseText);
      $('#BD_WFR').text(BDobj.WFR);

      if (BDobj.WFR != 0) {
        $("#BD_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_bd.open("GET",
      "cgi/table_status_wfr.cgi?table=D_BACKLOG_DEMAND", true);
  xmlhttp_wfr_bd.send();

  xmlhttp_exec_bd.onreadystatechange = function() {
    if (xmlhttp_exec_bd.readyState == 4) {
      var BDobj = $.parseJSON(xmlhttp_exec_bd.responseText);
      $('#BD_EXEC').text(BDobj.EXEC);

      if (BDobj.EXEC != 0) {
        $("#BD_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_bd.open("GET",
      "cgi/table_status_exec.cgi?table=D_BACKLOG_DEMAND", true);
  xmlhttp_exec_bd.send();

  xmlhttp_error_bd.onreadystatechange = function() {
    if (xmlhttp_error_bd.readyState == 4) {
      var BDobj = $.parseJSON(xmlhttp_error_bd.responseText);
      $('#BD_ERROR').text(BDobj.ERROR);

      if (BDobj.ERROR != 0) {
        $("#BD_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_bd.open("GET",
      "cgi/table_status_error.cgi?table=D_BACKLOG_DEMAND", true);
  xmlhttp_error_bd.send();

  xmlhttp_success_bd.onreadystatechange = function() {
    if (xmlhttp_success_bd.readyState == 4) {
      var BDobj = $.parseJSON(xmlhttp_success_bd.responseText);
      $('#BD_SUCCESS').text(BDobj.SUCCESS);

      if (BDobj.SUCCESS != 0) {
        $("#BD_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_bd.open("GET",
      "cgi/table_status_success.cgi?table=D_BACKLOG_DEMAND", true);
  xmlhttp_success_bd.send();

  xmlhttp_eta_bd.onreadystatechange = function() {
    if (xmlhttp_eta_bd.readyState == 4) {
      var BDobj = $.parseJSON(xmlhttp_eta_bd.responseText);
      $('#BD_ETA').text(BDobj.ETA);

    }
  };
  xmlhttp_eta_bd
      .open("GET", "cgi/table_ETA.cgi?table=D_BACKLOG_DEMAND", true);
  xmlhttp_eta_bd.send();

  xmlhttp_stm_bd.onreadystatechange = function() {
    if (xmlhttp_stm_bd.readyState == 4) {
      var BDobj = $.parseJSON(xmlhttp_stm_bd.responseText);
      $('#BD_STMISS').text(BDobj.STMiss);

      if (BDobj.STMiss != 0) {
        $("#BD_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_bd.open("GET", "cgi/table_STMiss.cgi?table=D_BACKLOG_DEMAND",
      true);
  xmlhttp_stm_bd.send();
}

// PRODUCT_GROUPS

function popult_pg_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_pg = new XMLHttpRequest();
    xmlhttp_exec_pg = new XMLHttpRequest();
    xmlhttp_error_pg = new XMLHttpRequest();
    xmlhttp_success_pg = new XMLHttpRequest();
    xmlhttp_total_pg = new XMLHttpRequest();
    xmlhttp_eta_pg = new XMLHttpRequest();
    xmlhttp_stm_pg = new XMLHttpRequest();

  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_pg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_pg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_pg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_pg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_pg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_pg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_pg = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_pg.onreadystatechange = function() {
    if (xmlhttp_wfr_pg.readyState == 4) {
      var PGobj = $.parseJSON(xmlhttp_wfr_pg.responseText);
      $('#PG_WFR').text(PGobj.WFR);

      if (PGobj.WFR != 0) {
        $("#PG_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_pg.open("GET", "cgi/table_status_wfr.cgi?table=PRODUCT_GROUPS",
      true);
  xmlhttp_wfr_pg.send();

  xmlhttp_exec_pg.onreadystatechange = function() {
    if (xmlhttp_exec_pg.readyState == 4) {
      var PGobj = $.parseJSON(xmlhttp_exec_pg.responseText);
      $('#PG_EXEC').text(PGobj.EXEC);

      if (PGobj.EXEC != 0) {
        $("#PG_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_pg.open("GET",
      "cgi/table_status_exec.cgi?table=PRODUCT_GROUPS", true);
  xmlhttp_exec_pg.send();

  xmlhttp_error_pg.onreadystatechange = function() {
    if (xmlhttp_error_pg.readyState == 4) {
      var PGobj = $.parseJSON(xmlhttp_error_pg.responseText);
      $('#PG_ERROR').text(PGobj.ERROR);

      if (PGobj.ERROR != 0) {
        $("#PG_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_pg.open("GET",
      "cgi/table_status_error.cgi?table=PRODUCT_GROUPS", true);
  xmlhttp_error_pg.send();

  xmlhttp_success_pg.onreadystatechange = function() {
    if (xmlhttp_success_pg.readyState == 4) {
      var PGobj = $.parseJSON(xmlhttp_success_pg.responseText);
      $('#PG_SUCCESS').text(PGobj.SUCCESS);

      if (PGobj.SUCCESS != 0) {
        $("#PG_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_pg.open("GET",
      "cgi/table_status_success.cgi?table=PRODUCT_GROUPS", true);
  xmlhttp_success_pg.send();

  xmlhttp_eta_pg.onreadystatechange = function() {
    if (xmlhttp_eta_pg.readyState == 4) {
      var PGobj = $.parseJSON(xmlhttp_eta_pg.responseText);
      $('#PG_ETA').text(PGobj.ETA);

    }
  };
  xmlhttp_eta_pg.open("GET", "cgi/table_ETA.cgi?table=PRODUCT_GROUPS", true);
  xmlhttp_eta_pg.send();

  xmlhttp_stm_pg.onreadystatechange = function() {
    if (xmlhttp_stm_pg.readyState == 4) {
      var PGobj = $.parseJSON(xmlhttp_stm_pg.responseText);
      $('#PG_STMISS').text(PGobj.STMiss);

      if (PGobj.STMiss != 0) {
        $("#PG_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_pg.open("GET", "cgi/table_STMiss.cgi?table=PRODUCT_GROUPS",
      true);
  xmlhttp_stm_pg.send();
}

// O_MS_MARKETPLACES

function popult_oms_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_oms = new XMLHttpRequest();
    xmlhttp_exec_oms = new XMLHttpRequest();
    xmlhttp_error_oms = new XMLHttpRequest();
    xmlhttp_success_oms = new XMLHttpRequest();
    xmlhttp_total_oms = new XMLHttpRequest();
    xmlhttp_eta_oms = new XMLHttpRequest();
    xmlhttp_stm_oms = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_oms = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_oms = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_oms = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_oms = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_oms = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_oms = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_oms = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_oms.onreadystatechange = function() {
    if (xmlhttp_wfr_oms.readyState == 4) {
      var OMSobj = $.parseJSON(xmlhttp_wfr_oms.responseText);
      $('#OMS_WFR').text(OMSobj.WFR);

      if (OMSobj.WFR != 0) {
        $("#OMS_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_oms.open("GET",
      "cgi/table_status_wfr.cgi?table=O_MS_MARKETPLACES", true);
  xmlhttp_wfr_oms.send();

  xmlhttp_exec_oms.onreadystatechange = function() {
    if (xmlhttp_exec_oms.readyState == 4) {
      var OMSobj = $.parseJSON(xmlhttp_exec_oms.responseText);
      $('#OMS_EXEC').text(OMSobj.EXEC);

      if (OMSobj.EXEC != 0) {
        $("#OMS_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_oms.open("GET",
      "cgi/table_status_exec.cgi?table=O_MS_MARKETPLACES", true);
  xmlhttp_exec_oms.send();

  xmlhttp_error_oms.onreadystatechange = function() {
    if (xmlhttp_error_oms.readyState == 4) {
      var OMSobj = $.parseJSON(xmlhttp_error_oms.responseText);
      $('#OMS_ERROR').text(OMSobj.ERROR);

      if (OMSobj.ERROR != 0) {
        $("#OMS_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_oms.open("GET",
      "cgi/table_status_error.cgi?table=O_MS_MARKETPLACES", true);
  xmlhttp_error_oms.send();

  xmlhttp_success_oms.onreadystatechange = function() {
    if (xmlhttp_success_oms.readyState == 4) {
      var OMSobj = $.parseJSON(xmlhttp_success_oms.responseText);
      $('#OMS_SUCCESS').text(OMSobj.SUCCESS);

      if (OMSobj.SUCCESS != 0) {
        $("#OMS_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_oms.open("GET",
      "cgi/table_status_success.cgi?table=O_MS_MARKETPLACES", true);
  xmlhttp_success_oms.send();

  xmlhttp_eta_oms.onreadystatechange = function() {
    if (xmlhttp_eta_oms.readyState == 4) {
      var OMSobj = $.parseJSON(xmlhttp_eta_oms.responseText);
      $('#OMS_ETA').text(OMSobj.ETA);

    }
  };
  xmlhttp_eta_oms.open("GET", "cgi/table_ETA.cgi?table=O_MS_MARKETPLACES",
      true);
  xmlhttp_eta_oms.send();

  xmlhttp_stm_oms.onreadystatechange = function() {
    if (xmlhttp_stm_oms.readyState == 4) {
      var OMSobj = $.parseJSON(xmlhttp_stm_oms.responseText);
      $('#OMS_STMISS').text(OMSobj.STMiss);

      if (OMSobj.STMiss != 0) {
        $("#OMS_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_oms.open("GET", "cgi/table_STMiss.cgi?table=O_MS_MARKETPLACES",
      true);
  xmlhttp_stm_oms.send();
}

// O_GL_PROD_GROUP_LINE_MAPPINGS
function popult_gpg_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_wfr_gpg = new XMLHttpRequest();
    xmlhttp_exec_gpg = new XMLHttpRequest();
    xmlhttp_error_gpg = new XMLHttpRequest();
    xmlhttp_success_gpg = new XMLHttpRequest();
    xmlhttp_total_gpg = new XMLHttpRequest();
    xmlhttp_eta_gpg = new XMLHttpRequest();
    xmlhttp_stm_gpg = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_wfr_gpg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_exec_gpg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_error_gpg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_success_gpg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_total_gpg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_eta_gpg = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp_stm_gpg = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_wfr_gpg.onreadystatechange = function() {
    if (xmlhttp_wfr_gpg.readyState == 4) {
      var GPGobj = $.parseJSON(xmlhttp_wfr_gpg.responseText);
      $('#GPG_WFR').text(GPGobj.WFR);

      if (GPGobj.WFR != 0) {
        $("#GPG_WFR").attr('class', 'round-info-wfr');

      }
    }
  };
  xmlhttp_wfr_gpg.open("GET",
      "cgi/table_status_wfr.cgi?table=O_GL_PROD_GROUP_LINE_MAPPINGS",
      true);
  xmlhttp_wfr_gpg.send();

  xmlhttp_exec_gpg.onreadystatechange = function() {
    if (xmlhttp_exec_gpg.readyState == 4) {
      var GPGobj = $.parseJSON(xmlhttp_exec_gpg.responseText);
      $('#GPG_EXEC').text(GPGobj.EXEC);

      if (GPGobj.EXEC != 0) {
        $("#GPG_EXEC").attr('class', 'round-info-exec');

      }
    }
  };
  xmlhttp_exec_gpg.open("GET",
      "cgi/table_status_exec.cgi?table=O_GL_PROD_GROUP_LINE_MAPPINGS",
      true);
  xmlhttp_exec_gpg.send();

  xmlhttp_error_gpg.onreadystatechange = function() {
    if (xmlhttp_error_gpg.readyState == 4) {
      var GPGobj = $.parseJSON(xmlhttp_error_gpg.responseText);
      $('#GPG_ERROR').text(GPGobj.ERROR);

      if (GPGobj.ERROR != 0) {
        $("#GPG_ERROR").attr('class', 'round-info-error');

      }
    }
  };
  xmlhttp_error_gpg.open("GET",
      "cgi/table_status_error.cgi?table=O_GL_PROD_GROUP_LINE_MAPPINGS",
      true);
  xmlhttp_error_gpg.send();

  xmlhttp_success_gpg.onreadystatechange = function() {
    if (xmlhttp_success_gpg.readyState == 4) {
      var GPGobj = $.parseJSON(xmlhttp_success_gpg.responseText);
      $('#GPG_SUCCESS').text(GPGobj.SUCCESS);

      if (GPGobj.SUCCESS != 0) {
        $("#GPG_SUCCESS").attr('class', 'round-info-success');

      }
    }
  };
  xmlhttp_success_gpg.open("GET",
      "cgi/table_status_success.cgi?table=O_GL_PROD_GROUP_LINE_MAPPINGS",
      true);
  xmlhttp_success_gpg.send();

  xmlhttp_eta_gpg.onreadystatechange = function() {
    if (xmlhttp_eta_gpg.readyState == 4) {
      var GPGobj = $.parseJSON(xmlhttp_eta_gpg.responseText);
      $('#GPG_ETA').text(GPGobj.ETA);

    }
  };
  xmlhttp_eta_gpg.open("GET",
      "cgi/table_ETA.cgi?table=O_GL_PROD_GROUP_LINE_MAPPINGS", true);
  xmlhttp_eta_gpg.send();

  xmlhttp_stm_gpg.onreadystatechange = function() {
    if (xmlhttp_stm_gpg.readyState == 4) {
      var GPGobj = $.parseJSON(xmlhttp_stm_gpg.responseText);
      $('#GPG_STMISS').text(GPGobj.STMiss);

      if (GPGobj.STMiss != 0) {
        $("#GPG_STMISS").attr('class', 'round-info-tot');

      }

    }
  };
  xmlhttp_stm_gpg.open("GET",
      "cgi/table_STMiss.cgi?table=O_GL_PROD_GROUP_LINE_MAPPINGS", true);
  xmlhttp_stm_gpg.send();
}

function popult_completion_count() {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp_completion = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5

      xmlhttp_completion = new ActiveXObject("Microsoft.XMLHTTP");

    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }

  xmlhttp_completion.onreadystatechange = function() {
    if (xmlhttp_completion.readyState == 4) {
      var Completeobj = $.parseJSON(xmlhttp_completion.responseText);
      $("#MP_today").text(Completeobj.D_MP);
      $("#DDAA_today").text(Completeobj.DDAA);
      $("#STD_today").text(Completeobj.STD_ITEM);
      $("#BD_today").text(Completeobj.BACKLOG);
      $("#GLP_today").text(Completeobj.GL_PROD);
      $("#OMS_today").text(Completeobj.O_MS);
      $("#PG_today").text(Completeobj.PROD_GRP);
      $("#WQTD_today").text(Completeobj.WQTD);
      $("#GPG_today").text(Completeobj.GL_GROUP);

    }
  };
  xmlhttp_completion.open("GET", "cgi/table_status_completion.cgi", true);
  xmlhttp_completion.send();

}

function ajaxFunction10(url, cfunc) {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp10 = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5
      xmlhttp10 = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }
  // Create a function that will receive data sent from the server and will
  // update
  // div section in the same page.
  xmlhttp10.onreadystatechange = cfunc;
  xmlhttp10.open("GET", url, true);
  // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp10.send();
  // xmlhttp9.send();
}

// Save delay cause
function insert_data() {

  ajaxFunction10("cgi/saveDelayCause.cgi?ISSUE=" + $("#status").val(),
      function() {
        if (xmlhttp10.readyState == 4) {
          $("#status").val("");
          get_data("special");

        }
      });
}

function ajaxFunction11(url, cfunc) {

  try {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp11 = new XMLHttpRequest();
  } catch (e) {
    // code for IE6, IE5
    try {
      // code for IE6, IE5
      xmlhttp11 = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      // Something went wrong
      alert("Your browser broke!");
      return false;
    }
  }
  xmlhttp11.onreadystatechange = cfunc;
  xmlhttp11.open("GET", url, true);
  xmlhttp11.send();
}

// Get delay cause
function get_data(type) {

  ajaxFunction11("cgi/getDelayCause.cgi", function() {
    if (xmlhttp11.readyState == 4) {
      var DelayCause = $.parseJSON(xmlhttp11.responseText);
      if (DelayCause.DELAY_CAUSE != '-') {
        $("#DSF_success_status").hide();
        $("#cause").val(DelayCause.DELAY_CAUSE);
        $("#DSF_fail_status").show();
      } else {
        $("#DSF_success_status").show();
      }
      if (type == "special") {
        $.unblockUI();
      }
    }
  });
}

function getDelayedJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'Delayed Jobs',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : 'No job is delayed today',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'TODAY_RUN_TIME DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/delayed_jobs.cgi?table='
                  + table_name,
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB ID',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN_ID : {
                title : 'JOBRUN ID',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              DB_INTERFACE_NAME : {
                title : 'DB_INTERFACE_NAME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DB_INTERFACE_NAME
                      + '</span>'
                }
              },
              AVG_RUN_TIME : {
                title : 'AVG_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.AVG_RUN_TIME
                      + '</span>'
                }
              },
              TODAY_RUN_TIME : {
                title : 'TODAY_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.TODAY_RUN_TIME
                      + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');

}

// Long Running Jobs
function getLongRunJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'Long Running Jobs',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : ' No long running job',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'EXCESS_START_MINUTES DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/long_running_dsf.cgi?table='
                  + table_name,
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN : {
                title : 'JOBRUN',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              AVG_TIME : {
                key : true,
                title : 'AVG_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.AVG_RUN_TIME
                      + '</span>'
                }

              },
              TODAY_RUN_TIME : {
                title : 'TODAY_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.TODAY_RUN_TIME
                      + '</span>'
                }

              },
              CLONE_JOB : {
                title : 'CLONE_JOB',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.CLONE_JOB
                      + '>'
                      + data.record.CLONE_JOB + '</a>';
                }
              },
              C_STATUS : {
                title : 'C_STATUS',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.CLONE_STATUS
                      + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');
}

// All jobs

function getWFRJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'WFR',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : 'No WFR job',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'EXCESS_START_MINUTES DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/detail_wfr.cgi?table='
                  + table_name + '&state=11',
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB ID',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN_ID : {
                title : 'JOBRUN ID',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              AVG_RUN_TIME : {
                title : 'AVG_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.AVG_RUN_TIME
                      + '</span>'
                }
              },
              HIERARCHY_LEVEL : {
                title : 'HIERARCHY LEVEL',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.H_LEVEL + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');
}

function getSTMissJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'Start Time Miss Jobs',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : 'No job missed start time >30 minutes',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'EXCESS_START_MINUTES DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/detail_STMiss.cgi?table='
                  + table_name,
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB ID',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN_ID : {
                title : 'JOBRUN ID',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              STATUS : {
                title : 'STATUS',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.STATUS + '</span>'
                }
              },
              EXCESS_START_MINUTES : {
                title : 'EXCESS_START_MINUTES',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.EXCESS_START_MINUTES
                      + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');
}

// Error
function getErrorJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'ERROR',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : ' No job in error',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'EXCESS_START_MINUTES DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/detail_error.cgi?table='
                  + table_name + '&state=7',
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB ID',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN_ID : {
                title : 'JOBRUN ID',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              AVG_RUN_TIME : {
                title : 'AVG_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.AVG_RUN_TIME
                      + '</span>'
                }
              },
              HIERARCHY_LEVEL : {
                title : 'HIERARCHY LEVEL',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.H_LEVEL + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');
}
// Success
function getSuccessJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'SUCCESS',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : 'No successful job',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'EXCESS_START_MINUTES DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/detail_success.cgi?table='
                  + table_name + '&state=6',
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB ID',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN_ID : {
                title : 'JOBRUN ID',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              AVG_RUN_TIME : {
                title : 'AVG_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.AVG_RUN_TIME
                      + '</span>'
                }
              },
              HIERARCHY_LEVEL : {
                title : 'HIERARCHY LEVEL',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.H_LEVEL + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');
}

// Executing
function getExecJobs(table_name, jtable_load) {
  var Jtable_DOM = document.getElementById(jtable_load);
  $(Jtable_DOM)
      .jtable(
          {
            title : 'EXECUTING',
            messages : {
              serverCommunicationError : 'Unable to fetch job details',
              loadingMessage : 'Fetching Job Details...',
              noDataAvailable : ' No job in execution',
              error : 'Error',
              close : 'Close',
              cannotLoadOptionsFor : 'Can not load options for field {0}'
            },
            defaultSorting : 'EXCESS_START_MINUTES DESC',
            ajaxSettings : {
              type : 'GET',
              dataType : 'json'
            },
            actions : {
              listAction : 'cgi/detail_exec.cgi?table='
                  + table_name + '&state=5',
            },
            fields : {
              JOB_ID : {
                key : true,
                title : 'JOB ID',
                display : function(data) {
                  return '<a style="font-size: 11" href=https://datanet.amazon.com/dw-platform/servlet/dwp/template/DWPJobPerformanceHistory.vm/job_id/'
                      + data.record.JOB_ID
                      + '>'
                      + data.record.JOB_ID + '</a>';
                }
              },
              JOB_RUN_ID : {
                title : 'JOBRUN ID',
                display : function(data) {
                  return '<a  style="font-size: 11" href=https://datanet-new.amazon.com/console?action=jobrun_details&jobrun_id='
                      + data.record.JOB_RUN_ID
                      + '>'
                      + data.record.JOB_RUN_ID + '</a>';
                }
              },
              DESCRIPTION : {
                title : 'DESCRIPTION',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.DESCRIPTION
                      + '</span>'
                },
                type : 'textarea'
              },
              AVG_RUN_TIME : {
                title : 'AVG_RUN_TIME',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.AVG_RUN_TIME
                      + '</span>'
                }
              },
              HIERARCHY_LEVEL : {
                title : 'HIERARCHY LEVEL',
                display : function(data) {
                  return '<span style="font-size: 11">'
                      + data.record.H_LEVEL + '</span>'
                }
              }
            }
          });
  $(Jtable_DOM).jtable('load');
}

function hidecontainer(table_name) {
  if (table_name == 'D_MP_ASINS') {
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-pg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#page-container-mp').css('display', 'none');
    $('#page-container-ddaa').css('display', 'none');
    $('#page-container-gpg').css('display', 'none');
    $('#page-container-oms').css('display', 'none');
    $('#page-container-std').css('display', 'none');
    $('#page-container-wqtd').css('display', 'none');
    $('#page-container-bd').css('display', 'none');
    $('#page-container-gp').css('display', 'none');
  }

}

function hideAllPanel() {
  $('#DelayedJobs_MP').css('display', 'none');
  $('#ErrorJobs_MP').css('display', 'none');
  $('#LongRunJobs_MP').css('display', 'none');
  $('#WFRJobs_MP').css('display', 'none');
  $('#ExecJobs_MP').css('display', 'none');
  $('#SuccessJobs_MP').css('display', 'none');
  $('#STMissJobs_MP').css('display', 'none');

  $('#DelayedJobs_DDAA').css('display', 'none');
  $('#ErrorJobs_DDAA').css('display', 'none');
  $('#LongRunJobs_DDAA').css('display', 'none');
  $('#WFRJobs_DDAA').css('display', 'none');
  $('#ExecJobs_DDAA').css('display', 'none');
  $('#SuccessJobs_DDAA').css('display', 'none');
  $('#STMissJobs_DDAA').css('display', 'none');

  $('#DelayedJobs_WQTD').css('display', 'none');
  $('#ErrorJobs_WQTD').css('display', 'none');
  $('#LongRunJobs_WQTD').css('display', 'none');
  $('#WFRJobs_WQTD').css('display', 'none');
  $('#ExecJobs_WQTD').css('display', 'none');
  $('#SuccessJobs_WQTD').css('display', 'none');
  $('#STMissJobs_WQTD').css('display', 'none');

  $('#DelayedJobs_BD').css('display', 'none');
  $('#ErrorJobs_BD').css('display', 'none');
  $('#LongRunJobs_BD').css('display', 'none');
  $('#WFRJobs_BD').css('display', 'none');
  $('#ExecJobs_BD').css('display', 'none');
  $('#SuccessJobs_BD').css('display', 'none');
  $('#STMissJobs_BD').css('display', 'none');

  $('#DelayedJobs_GP').css('display', 'none');
  $('#ErrorJobs_GP').css('display', 'none');
  $('#LongRunJobs_GP').css('display', 'none');
  $('#WFRJobs_GP').css('display', 'none');
  $('#ExecJobs_GP').css('display', 'none');
  $('#SuccessJobs_GP').css('display', 'none');
  $('#STMissJobs_GP').css('display', 'none');

  $('#DelayedJobs_GPG').css('display', 'none');
  $('#ErrorJobs_GPG').css('display', 'none');
  $('#LongRunJobs_GPG').css('display', 'none');
  $('#WFRJobs_GPG').css('display', 'none');
  $('#ExecJobs_GPG').css('display', 'none');
  $('#SuccessJobs_GPG').css('display', 'none');
  $('#STMissJobs_GPG').css('display', 'none');

  $('#DelayedJobs_STD').css('display', 'none');
  $('#ErrorJobs_STD').css('display', 'none');
  $('#LongRunJobs_STD').css('display', 'none');
  $('#WFRJobs_STD').css('display', 'none');
  $('#ExecJobs_STD').css('display', 'none');
  $('#SuccessJobs_STD').css('display', 'none');
  $('#STMissJobs_STD').css('display', 'none');

  $('#DelayedJobs_PG').css('display', 'none');
  $('#ErrorJobs_PG').css('display', 'none');
  $('#LongRunJobs_PG').css('display', 'none');
  $('#WFRJobs_PG').css('display', 'none');
  $('#ExecJobs_PG').css('display', 'none');
  $('#SuccessJobs_PG').css('display', 'none');
  $('#STMissJobs_PG').css('display', 'none');

  $('#DelayedJobs_OMS').css('display', 'none');
  $('#ErrorJobs_OMS').css('display', 'none');
  $('#LongRunJobs_OMS').css('display', 'none');
  $('#WFRJobs_OMS').css('display', 'none');
  $('#ExecJobs_OMS').css('display', 'none');
  $('#SuccessJobs_OMS').css('display', 'none');
  $('#STMissJobs_OMS').css('display', 'none');

}

// Delayed Jobs
function showDelayedJobs(table_name) {
  hideAllPanel();
  if (table_name == 'D_MP_ASINS') {
    $('#DelayedJobs_MP').show();
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#DelayedJobs_DDAA').show();
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#DelayedJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#DelayedJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#DelayedJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#DelayedJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#DelayedJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#DelayedJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#DelayedJobs_PG').show();
  }

}

// Long Running Jobs

function showLongRunJobs(table_name) {
  hideAllPanel();
  if (table_name == 'D_MP_ASINS') {
    $('#LongRunJobs_MP').show();
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#LongRunJobs_DDAA').show();
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#LongRunJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#LongRunJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#LongRunJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#LongRunJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#LongRunJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#LongRunJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#LongRunJobs_PG').show();
  }
}
function showCurrentWFR(table_name) {
  hideAllPanel();
  if (table_name == 'D_MP_ASINS') {
    $('#WFRJobs_MP').show();
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#WFRJobs_DDAA').show();
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#WFRJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#WFRJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#WFRJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#WFRJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#WFRJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#WFRJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#WFRJobs_PG').show();
  }
}
function showCurrentError(table_name) {
  hideAllPanel();
  if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#ErrorJobs_DDAA').show();
  } else if (table_name == 'D_MP_ASINS') {
    $('#ErrorJobs_MP').show();

  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#ErrorJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#ErrorJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#ErrorJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#ErrorJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#ErrorJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#ErrorJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#ErrorJobs_PG').show();
  }

}
function showCurrentSuccess(table_name) {
  hideAllPanel();
  if (table_name == 'D_MP_ASINS') {
    $('#SuccessJobs_MP').show();
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#SuccessJobs_DDAA').show();
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#SuccessJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#SuccessJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#SuccessJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#SuccessJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#SuccessJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#SuccessJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#SuccessJobs_PG').show();
  }

}
function showCurrentExec(table_name) {
  hideAllPanel();
  if (table_name == 'D_MP_ASINS') {
    $('#ExecJobs_MP').show();
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#ExecJobs_DDAA').show();
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#ExecJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#ExecJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#ExecJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#ExecJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#ExecJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#ExecJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#ExecJobs_PG').show();
  }
}

function showCurrentSTMiss(table_name) {
  hideAllPanel();
  if (table_name == 'D_MP_ASINS') {
    $('#STMissJobs_MP').show();
  } else if (table_name == 'D_DAILY_ASIN_ACTIVITY') {
    $('#STMissJobs_DDAA').show();
  } else if (table_name == 'W_QTD_UNITS_SERVED_DLD') {
    $('#STMissJobs_WQTD').show();
  } else if (table_name == 'D_BACKLOG_DEMAND') {
    $('#STMissJobs_BD').show();
  } else if (table_name == 'D_AMAZON_STANDARD_ITEMS') {
    $('#STMissJobs_STD').show();
  } else if (table_name == 'D_GL_PRODUCT_LINES') {
    $('#STMissJobs_GP').show();
  } else if (table_name == 'O_MS_MARKETPLACES') {
    $('#STMissJobs_OMS').show();
  } else if (table_name == 'O_GL_PROD_GROUP_LINE_MAPPINGS') {
    $('#STMissJobs_GPG').show();
  } else if (table_name == 'PRODUCT_GROUPS') {
    $('#STMissJobs_PG').show();
  }
}

function setButtonColor() {
  $('#btnError_MP').css("background-color", "#B8BCC0");
  $('#btnDelayed_MP').css("background-color", "#B8BCC0");
  $('#btnSTMiss_MP').css("background-color", "#B8BCC0");
  $('#btnWFR_MP').css("background-color", "#B8BCC0");
  $('#btnSuccess_MP').css("background-color", "#B8BCC0");
  $('#btnExec_MP').css("background-color", "#B8BCC0");
  $('#btnLongRun_MP').css("background-color", "#B8BCC0");

  $('#btnError_MP').css("color", "black");
  $('#btnDelayed_MP').css("color", "black");
  $('#btnSTMiss_MP').css("color", "black");
  $('#btnWFR_MP').css("color", "black");
  $('#btnSuccess_MP').css("color", "black");
  $('#btnExec_MP').css("color", "black");
  $('#btnLongRun_MP').css("color", "black");

  $('#btnError_DDAA').css("background-color", "#B8BCC0");
  $('#btnDelayed_DDAA').css("background-color", "#B8BCC0");
  $('#btnSTMiss_DDAA').css("background-color", "#B8BCC0");
  $('#btnWFR_DDAA').css("background-color", "#B8BCC0");
  $('#btnSuccess_DDAA').css("background-color", "#B8BCC0");
  $('#btnExec_DDAA').css("background-color", "#B8BCC0");
  $('#btnLongRun_DDAA').css("background-color", "#B8BCC0");

  $('#btnError_DDAA').css("color", "black");
  $('#btnDelayed_DDAA').css("color", "black");
  $('#btnSTMiss_DDAA').css("color", "black");
  $('#btnWFR_DDAA').css("color", "black");
  $('#btnSuccess_DDAA').css("color", "black");
  $('#btnExec_DDAA').css("color", "black");
  $('#btnLongRun_DDAA').css("color", "black");

  $('#btnError_WQTD').css("background-color", "#B8BCC0");
  $('#btnDelayed_WQTD').css("background-color", "#B8BCC0");
  $('#btnSTMiss_WQTD').css("background-color", "#B8BCC0");
  $('#btnWFR_WQTD').css("background-color", "#B8BCC0");
  $('#btnSuccess_WQTD').css("background-color", "#B8BCC0");
  $('#btnExec_WQTD').css("background-color", "#B8BCC0");
  $('#btnLongRun_WQTD').css("background-color", "#B8BCC0");

  $('#btnError_WQTD').css("color", "black");
  $('#btnDelayed_WQTD').css("color", "black");
  $('#btnSTMiss_WQTD').css("color", "black");
  $('#btnWFR_WQTD').css("color", "black");
  $('#btnSuccess_WQTD').css("color", "black");
  $('#btnExec_WQTD').css("color", "black");
  $('#btnLongRun_WQTD').css("color", "black");

  $('#btnError_BD').css("background-color", "#B8BCC0");
  $('#btnDelayed_BD').css("background-color", "#B8BCC0");
  $('#btnSTMiss_BD').css("background-color", "#B8BCC0");
  $('#btnWFR_BD').css("background-color", "#B8BCC0");
  $('#btnSuccess_BD').css("background-color", "#B8BCC0");
  $('#btnExec_BD').css("background-color", "#B8BCC0");
  $('#btnLongRun_BD').css("background-color", "#B8BCC0");

  $('#btnError_BD').css("color", "black");
  $('#btnDelayed_BD').css("color", "black");
  $('#btnSTMiss_BD').css("color", "black");
  $('#btnWFR_BD').css("color", "black");
  $('#btnSuccess_BD').css("color", "black");
  $('#btnExec_BD').css("color", "black");
  $('#btnLongRun_BD').css("color", "black");

  $('#btnError_STD').css("background-color", "#B8BCC0");
  $('#btnDelayed_STD').css("background-color", "#B8BCC0");
  $('#btnSTMiss_STD').css("background-color", "#B8BCC0");
  $('#btnWFR_STD').css("background-color", "#B8BCC0");
  $('#btnSuccess_STD').css("background-color", "#B8BCC0");
  $('#btnExec_STD').css("background-color", "#B8BCC0");
  $('#btnLongRun_STD').css("background-color", "#B8BCC0");

  $('#btnError_STD').css("color", "black");
  $('#btnDelayed_STD').css("color", "black");
  $('#btnSTMiss_STD').css("color", "black");
  $('#btnWFR_STD').css("color", "black");
  $('#btnSuccess_STD').css("color", "black");
  $('#btnExec_STD').css("color", "black");
  $('#btnLongRun_STD').css("color", "black");

  $('#btnError_PG').css("background-color", "#B8BCC0");
  $('#btnDelayed_PG').css("background-color", "#B8BCC0");
  $('#btnSTMiss_PG').css("background-color", "#B8BCC0");
  $('#btnWFR_PG').css("background-color", "#B8BCC0");
  $('#btnSuccess_PG').css("background-color", "#B8BCC0");
  $('#btnExec_PG').css("background-color", "#B8BCC0");
  $('#btnLongRun_PG').css("background-color", "#B8BCC0");

  $('#btnError_PG').css("color", "black");
  $('#btnDelayed_PG').css("color", "black");
  $('#btnSTMiss_PG').css("color", "black");
  $('#btnWFR_PG').css("color", "black");
  $('#btnSuccess_PG').css("color", "black");
  $('#btnExec_PG').css("color", "black");
  $('#btnLongRun_PG').css("color", "black");

  $('#btnError_GP').css("background-color", "#B8BCC0");
  $('#btnDelayed_GP').css("background-color", "#B8BCC0");
  $('#btnSTMiss_GP').css("background-color", "#B8BCC0");
  $('#btnWFR_GP').css("background-color", "#B8BCC0");
  $('#btnSuccess_GP').css("background-color", "#B8BCC0");
  $('#btnExec_GP').css("background-color", "#B8BCC0");
  $('#btnLongRun_GP').css("background-color", "#B8BCC0");

  $('#btnError_GP').css("color", "black");
  $('#btnDelayed_GP').css("color", "black");
  $('#btnSTMiss_GP').css("color", "black");
  $('#btnWFR_GP').css("color", "black");
  $('#btnSuccess_GP').css("color", "black");
  $('#btnExec_GP').css("color", "black");
  $('#btnLongRun_GP').css("color", "black");

  $('#btnError_GPG').css("background-color", "#B8BCC0");
  $('#btnDelayed_GPG').css("background-color", "#B8BCC0");
  $('#btnSTMiss_GPG').css("background-color", "#B8BCC0");
  $('#btnWFR_GPG').css("background-color", "#B8BCC0");
  $('#btnSuccess_GPG').css("background-color", "#B8BCC0");
  $('#btnExec_GPG').css("background-color", "#B8BCC0");
  $('#btnLongRun_GPG').css("background-color", "#B8BCC0");

  $('#btnError_GPG').css("color", "black");
  $('#btnDelayed_GPG').css("color", "black");
  $('#btnSTMiss_GPG').css("color", "black");
  $('#btnWFR_GPG').css("color", "black");
  $('#btnSuccess_GPG').css("color", "black");
  $('#btnExec_GPG').css("color", "black");
  $('#btnLongRun_GPG').css("color", "black");

  $('#btnError_OMS').css("background-color", "#B8BCC0");
  $('#btnDelayed_OMS').css("background-color", "#B8BCC0");
  $('#btnSTMiss_OMS').css("background-color", "#B8BCC0");
  $('#btnWFR_OMS').css("background-color", "#B8BCC0");
  $('#btnSuccess_OMS').css("background-color", "#B8BCC0");
  $('#btnExec_OMS').css("background-color", "#B8BCC0");
  $('#btnLongRun_OMS').css("background-color", "#B8BCC0");

  $('#btnError_OMS').css("color", "black");
  $('#btnDelayed_OMS').css("color", "black");
  $('#btnSTMiss_OMS').css("color", "black");
  $('#btnWFR_OMS').css("color", "black");
  $('#btnSuccess_OMS').css("color", "black");
  $('#btnExec_OMS').css("color", "black");
  $('#btnLongRun_OMS').css("color", "black");
}

$(document).ready(
    function() {
      $('#Issue_container').hide();
      $("#status").val("");
      var left = 4000
      $('#text_counter').text('Characters left: ' + left);

      $('#status').keyup(function() {

        left = 4000 - $(this).val().length;

        if (left < 0) {
          $('#text_counter').addClass("overlimit");
          $('#posting').attr("disabled", true);
        } else {
          $('#text_counter').removeClass("overlimit");
          $('#posting').attr("disabled", false);
        }

        $('#text_counter').text('Characters left: ' + left);
      });

      $.blockUI({ message : '<h3>Just a moment...</h3>' });
      get_data("normal");

      $('#Issue_Submission').click(function() {
        $('#Issue_container').css("display", "block");
      });
      $('#DSF_fail_status').click(function() {
        $('#Display_Cause').css("display", "block");
      });

      $("#posting").click(function() {
        $('#Issue_container').css("display", "none");

        $.blockUI({
          message : '<h3>Submitting...</h3>'
        });

        insert_data();
      });

      $("#cancel_display").click(function() {
        $('#Display_Cause').css("display", "none");
      });

      $("#cancel_delay").click(function() {
        $('#Issue_container').css("display", "none");
      });

      popult_mp_count();
      popult_ddaa_count();
      popult_wqtd_count();
      popult_bd_count();
      popult_std_count();
      popult_glp_count();
      popult_pg_count();
      popult_oms_count();
      popult_gpg_count();
      popult_completion_count();

      setTimeout($.unblockUI, 180000);

      $('#refreshSuccess_GP').click(function() {
        getSuccessJobs('D_GL_PRODUCT_LINES', 'tblCurrentSuccess_GP');
      });
      $('#refreshWFR_GP').click(function() {
        getWFRJobs('D_GL_PRODUCT_LINES', 'tblCurrentWFR_GP');
      });
      $('#refreshExec_GP').click(function() {
        getExecJobs('D_GL_PRODUCT_LINES', 'tblCurrentExec_GP');
      });
      $('#refreshError_GP').click(function() {
        getErrorJobs('D_GL_PRODUCT_LINES', 'tblCurrentError_GP');
      });
      $('#refreshSTMiss_GP').click(function() {
        getSTMissJobs('D_GL_PRODUCT_LINES', 'tblSTMissJobs_GP');
      });
      $('#refreshlong_GP').click(function() {
        getLongRunJobs('D_GL_PRODUCT_LINES', 'tblLongRun_GP');
      });
      $('#refreshDelay_GP').click(function() {
        getDelayedJobs('D_GL_PRODUCT_LINES', 'tblDelayJobs_GP');
      });

      $('#refreshSuccess_STD').click(
          function() {
            getSuccessJobs('D_AMAZON_STANDARD_ITEMS',
                'tblCurrentSuccess_STD');
          });
      $('#refreshWFR_STD').click(function() {
        getWFRJobs('D_AMAZON_STANDARD_ITEMS', 'tblCurrentWFR_STD');
      });
      $('#refreshExec_STD').click(function() {
        getExecJobs('D_AMAZON_STANDARD_ITEMS', 'tblCurrentExec_STD');
      });
      $('#refreshError_STD').click(function() {
        getErrorJobs('D_AMAZON_STANDARD_ITEMS', 'tblCurrentError_STD');
      });
      $('#refreshSTMiss_STD').click(function() {
        getSTMissJobs('D_AMAZON_STANDARD_ITEMS', 'tblSTMissJobs_STD');
      });
      $('#refreshlong_STD').click(function() {
        getLongRunJobs('D_AMAZON_STANDARD_ITEMS', 'tblLongRun_STD');
      });
      $('#refreshDelay_STD').click(function() {
        getDelayedJobs('D_AMAZON_STANDARD_ITEMS', 'tblDelayJobs_STD');
      });

      $('#refreshSuccess_MP').click(function() {
        getSuccessJobs('D_MP_ASINS', 'tblCurrentSuccess_MP');
      });
      $('#refreshWFR_MP').click(function() {
        getWFRJobs('D_MP_ASINS', 'tblCurrentWFR_MP');
      });
      $('#refreshExec_MP').click(function() {
        getExecJobs('D_MP_ASINS', 'tblCurrentExec_MP');
      });
      $('#refreshError_MP').click(function() {
        getErrorJobs('D_MP_ASINS', 'tblCurrentError_MP');
      });
      $('#refreshSTMiss_MP').click(function() {
        getSTMissJobs('D_MP_ASINS', 'tblSTMissJobs_MP');
      });
      $('#refreshlong_MP').click(function() {
        getLongRunJobs('D_MP_ASINS', 'tblLongRun_MP');
      });
      $('#refreshDelay_MP').click(function() {
        getDelayedJobs('D_MP_ASINS', 'tblDelayJobs_MP');
      });

      $('#refreshSuccess_OMS').click(function() {
        getSuccessJobs('O_MS_MARKETPLACES', 'tblCurrentSuccess_OMS');
      });
      $('#refreshWFR_OMS').click(function() {
        getWFRJobs('O_MS_MARKETPLACES', 'tblCurrentWFR_OMS');
      });
      $('#refreshExec_OMS').click(function() {
        getExecJobs('O_MS_MARKETPLACES', 'tblCurrentExec_OMS');
      });
      $('#refreshError_OMS').click(function() {
        getErrorJobs('O_MS_MARKETPLACES', 'tblCurrentError_OMS');
      });
      $('#refreshSTMiss_OMS').click(function() {
        getSTMissJobs('O_MS_MARKETPLACES', 'tblSTMissJobs_OMS');
      });
      $('#refreshlong_OMS').click(function() {
        getLongRunJobs('O_MS_MARKETPLACES', 'tblLongRun_OMS');
      });
      $('#refreshDelay_OMS').click(function() {
        getDelayedJobs('O_MS_MARKETPLACES', 'tblDelayJobs_OMS');
      });

      $('#refreshSuccess_DDAA').click(
          function() {
            getSuccessJobs('D_DAILY_ASIN_ACTIVITY',
                'tblCurrentSuccess_DDAA');
          });
      $('#refreshWFR_DDAA').click(function() {
        getWFRJobs('D_DAILY_ASIN_ACTIVITY', 'tblCurrentWFR_DDAA');
      });
      $('#refreshExec_DDAA').click(function() {
        getExecJobs('D_DAILY_ASIN_ACTIVITY', 'tblCurrentExec_DDAA');
      });
      $('#refreshError_DDAA').click(function() {
        getErrorJobs('D_DAILY_ASIN_ACTIVITY', 'tblCurrentError_DDAA');
      });
      $('#refreshSTMiss_DDAA').click(function() {
        getSTMissJobs('D_DAILY_ASIN_ACTIVITY', 'tblSTMissJobs_DDAA');
      });
      $('#refreshlong_DDAA').click(function() {
        getLongRunJobs('D_DAILY_ASIN_ACTIVITY', 'tblLongRun_DDAA');
      });
      $('#refreshDelay_DDAA').click(function() {
        getDelayedJobs('D_DAILY_ASIN_ACTIVITY', 'tblDelayJobs_DDAA');
      });

      $('#refreshSuccess_BD').click(function() {
        getSuccessJobs('D_BACKLOG_DEMAND', 'tblCurrentSuccess_BD');
      });
      $('#refreshWFR_BD').click(function() {
        getWFRJobs('D_BACKLOG_DEMAND', 'tblCurrentWFR_BD');
      });
      $('#refreshExec_BD').click(function() {
        getExecJobs('D_BACKLOG_DEMAND', 'tblCurrentExec_BD');
      });
      $('#refreshError_BD').click(function() {
        getErrorJobs('D_BACKLOG_DEMAND', 'tblCurrentError_BD');
      });
      $('#refreshSTMiss_BD').click(function() {
        getSTMissJobs('D_BACKLOG_DEMAND', 'tblSTMissJobs_BD');
      });
      $('#refreshlong_BD').click(function() {
        getLongRunJobs('D_BACKLOG_DEMAND', 'tblLongRun_BD');
      });
      $('#refreshDelay_BD').click(function() {
        getDelayedJobs('D_BACKLOG_DEMAND', 'tblDelayJobs_BD');
      });

      $('#refreshSuccess_WQTD').click(
          function() {
            getSuccessJobs('W_QTD_UNITS_SERVED_DLD',
                'tblCurrentSuccess_WQTD');
          });
      $('#refreshWFR_WQTD').click(function() {
        getWFRJobs('W_QTD_UNITS_SERVED_DLD', 'tblCurrentWFR_WQTD');
      });
      $('#refreshExec_WQTD').click(function() {
        getExecJobs('W_QTD_UNITS_SERVED_DLD', 'tblCurrentExec_WQTD');
      });
      $('#refreshError_WQTD').click(function() {
        getErrorJobs('W_QTD_UNITS_SERVED_DLD', 'tblCurrentError_WQTD');
      });
      $('#refreshSTMiss_WQTD').click(function() {
        getSTMissJobs('W_QTD_UNITS_SERVED_DLD', 'tblSTMissJobs_WQTD');
      });
      $('#refreshlong_WQTD').click(function() {
        getLongRunJobs('W_QTD_UNITS_SERVED_DLD', 'tblLongRun_WQTD');
      });
      $('#refreshDelay_WQTD').click(function() {
        getDelayedJobs('W_QTD_UNITS_SERVED_DLD', 'tblDelayJobs_WQTD');
      });

      $('#refreshSuccess_GPG').click(
          function() {
            getSuccessJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentSuccess_GPG');
          });
      $('#refreshWFR_GPG').click(
          function() {
            getWFRJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentWFR_GPG');
          });
      $('#refreshExec_GPG').click(
          function() {
            getExecJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentExec_GPG');
          });
      $('#refreshError_GPG').click(
          function() {
            getErrorJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentError_GPG');
          });
      $('#refreshSTMiss_GPG').click(
          function() {
            getSTMissJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblSTMissJobs_GPG');
          });
      $('#refreshlong_GPG').click(
          function() {
            getLongRunJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblLongRun_GPG');
          });
      $('#refreshDelay_GPG').click(
          function() {
            getDelayedJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblDelayJobs_GPG');
          });

      $('#refreshSuccess_PG').click(function() {
        getSuccessJobs('PRODUCT_GROUPS', 'tblCurrentSuccess_PG');
      });
      $('#refreshWFR_PG').click(function() {
        getWFRJobs('PRODUCT_GROUPS', 'tblCurrentWFR_PG');
      });
      $('#refreshExec_PG').click(function() {
        getExecJobs('PRODUCT_GROUPS', 'tblCurrentExec_PG');
      });
      $('#refreshError_PG').click(function() {
        getErrorJobs('PRODUCT_GROUPS', 'tblCurrentError_PG');
      });
      $('#refreshSTMiss_PG').click(function() {
        getSTMissJobs('PRODUCT_GROUPS', 'tblSTMissJobs_PG');
      });
      $('#refreshlong_PG').click(function() {
        getLongRunJobs('PRODUCT_GROUPS', 'tblLongRun_PG');
      });
      $('#refreshDelay_PG').click(function() {
        getDelayedJobs('PRODUCT_GROUPS', 'tblDelayJobs_PG');
      });

      // D_MP_ASINS details

      $('#refresh_MP').click(function() {
        $('#MP_loader').css('display', 'block');
        $('#refresh_MP').css('display', 'none');
        $('#MP_DET').css('display', 'none');
        $('#MP_WFR').text('-');
        $('#MP_EXEC').text('-');
        $('#MP_ERROR').text('-');
        $('#MP_SUCCESS').text('-');
        $('#MP_STMISS').text('-');
        popult_mp_count();
        setTimeout(function() {
          $('#MP_loader').hide();
          $('#refresh_MP').show();
          $('#MP_DET').show();
        }, 30000);

      });

      $('#MP_DET').click(function() {
        hidecontainer('D_MP_ASINS');
        $('#page-container-mp').toggle();
        setButtonColor();
        $('#btnError_MP').css("background-color", "#C00000");
        $('#btnError_MP').css("color", "white");
        showCurrentError('D_MP_ASINS');
        getWFRJobs('D_MP_ASINS', 'tblCurrentWFR_MP');
        getDelayedJobs('D_MP_ASINS', 'tblDelayJobs_MP');
        getSTMissJobs('D_MP_ASINS', 'tblSTMissJobs_MP');
        getExecJobs('D_MP_ASINS', 'tblCurrentExec_MP');
        getSuccessJobs('D_MP_ASINS', 'tblCurrentSuccess_MP');
        getErrorJobs('D_MP_ASINS', 'tblCurrentError_MP');
        getLongRunJobs('D_MP_ASINS', 'tblLongRun_MP');
      });

      $('#btnDelayed_MP').click(function() {
        setButtonColor();
        $('#btnDelayed_MP').css("background-color", "#C00000");
        $('#btnDelayed_MP').css("color", "white");
        showDelayedJobs('D_MP_ASINS');
      });

      $('#btnWFR_MP').click(function() {
        setButtonColor();
        $('#btnWFR_MP').css("background-color", "#FFFF00");
        showCurrentWFR('D_MP_ASINS');
      });

      $('#btnLongRun_MP').click(function() {
        setButtonColor();
        $('#btnLongRun_MP').css("background-color", "#C00000");
        $('#btnLongRun_MP').css("color", "white");
        showLongRunJobs('D_MP_ASINS');
      });

      $('#btnExec_MP').click(function() {
        setButtonColor();
        $('#btnExec_MP').css("background-color", "#3399FF");
        $('#btnExec_MP').css("color", "white");
        showCurrentExec('D_MP_ASINS');
      });

      $('#btnError_MP').click(function() {
        setButtonColor();
        $('#btnError_MP').css("background-color", "#C00000");
        $('#btnError_MP').css("color", "white");
        showCurrentError('D_MP_ASINS');
      });

      $('#btnSuccess_MP').click(function() {
        setButtonColor();
        $('#btnSuccess_MP').css("background-color", "#33CC00");
        $('#btnSuccess_MP').css("color", "white");
        showCurrentSuccess('D_MP_ASINS');
      });

      $('#btnSTMiss_MP').click(function() {
        setButtonColor();
        $('#btnSTMiss_MP').css("background-color", "#C00000");
        $('#btnSTMiss_MP').css("color", "white");
        showCurrentSTMiss('D_MP_ASINS');
      });

      // DDAA details

      $('#refresh_DDAA').click(function() {
        $('#DDAA_loader').css('display', 'block');
        $('#refresh_DDAA').css('display', 'none');
        $('#DDAA_DET').css('display', 'none');
        $('#DDAA_WFR').text('-');
        $('#DDAA_EXEC').text('-');
        $('#DDAA_ERROR').text('-');
        $('#DDAA_SUCCESS').text('-');
        $('#DDAA_STMISS').text('-');
        popult_ddaa_count();
        setTimeout(function() {
          $('#DDAA_loader').hide();
          $('#refresh_DDAA').show();
          $('#DDAA_DET').show();
        }, 30000);

      });

      $('#DDAA_DET').click(
          function() {
            hidecontainer('D_DAILY_ASIN_ACTIVITY');
            $('#page-container-ddaa').toggle();
            setButtonColor();
            $('#btnError_DDAA').css("background-color", "#C00000");
            $('#btnError_DDAA').css("color", "white");
            showCurrentError('D_DAILY_ASIN_ACTIVITY');
            getWFRJobs('D_DAILY_ASIN_ACTIVITY',
                'tblCurrentWFR_DDAA');
            getDelayedJobs('D_DAILY_ASIN_ACTIVITY',
                'tblDelayJobs_DDAA');
            getSTMissJobs('D_DAILY_ASIN_ACTIVITY',
                'tblSTMissJobs_DDAA');
            getExecJobs('D_DAILY_ASIN_ACTIVITY',
                'tblCurrentExec_DDAA');
            getSuccessJobs('D_DAILY_ASIN_ACTIVITY',
                'tblCurrentSuccess_DDAA');
            getErrorJobs('D_DAILY_ASIN_ACTIVITY',
                'tblCurrentError_DDAA');
            getLongRunJobs('D_DAILY_ASIN_ACTIVITY',
                'tblLongRun_DDAA');
          });

      $('#btnDelayed_DDAA').click(function() {
        setButtonColor();
        $('#btnDelayed_DDAA').css("background-color", "#C00000");
        $('#btnDelayed_DDAA').css("color", "white");
        showDelayedJobs('D_DAILY_ASIN_ACTIVITY');
      });

      $('#btnWFR_DDAA').click(function() {
        setButtonColor();
        $('#btnWFR_DDAA').css("background-color", "#FFFF00");
        showCurrentWFR('D_DAILY_ASIN_ACTIVITY');
      });

      $('#btnLongRun_DDAA').click(function() {
        setButtonColor();
        $('#btnLongRun_DDAA').css("background-color", "#C00000");
        $('#btnLongRun_DDAA').css("color", "white");
        showLongRunJobs('D_DAILY_ASIN_ACTIVITY');
      });

      $('#btnExec_DDAA').click(function() {
        setButtonColor();
        $('#btnExec_DDAA').css("background-color", "#3399FF");
        $('#btnExec_DDAA').css("color", "white");
        showCurrentExec('D_DAILY_ASIN_ACTIVITY');
      });

      $('#btnError_DDAA').click(function() {
        setButtonColor();
        $('#btnError_DDAA').css("background-color", "#C00000");
        $('#btnError_DDAA').css("color", "white");
        showCurrentError('D_DAILY_ASIN_ACTIVITY');
      });

      $('#btnSuccess_DDAA').click(function() {
        setButtonColor();
        $('#btnSuccess_DDAA').css("background-color", "#33CC00");
        $('#btnSuccess_DDAA').css("color", "white");
        showCurrentSuccess('D_DAILY_ASIN_ACTIVITY');
      });

      $('#btnSTMiss_DDAA').click(function() {
        setButtonColor();
        $('#btnSTMiss_DDAA').css("background-color", "#C00000");
        $('#btnSTMiss_DDAA').css("color", "white");
        showCurrentSTMiss('D_DAILY_ASIN_ACTIVITY');
      });

      // WQTD details
      $('#refresh_WQTD').click(function() {
        $('#WQTD_loader').css('display', 'block');
        $('#refresh_WQTD').css('display', 'none');
        $('#WQTD_DET').css('display', 'none');
        $('#WQTD_WFR').text('-');
        $('#WQTD_EXEC').text('-');
        $('#WQTD_ERROR').text('-');
        $('#WQTD_SUCCESS').text('-');
        $('#WQTD_STMISS').text('-');
        popult_wqtd_count();
        setTimeout(function() {
          $('#WQTD_loader').hide();
          $('#refresh_WQTD').show();
          $('#WQTD_DET').show();
        }, 30000);

      });

      $('#WQTD_DET').click(
          function() {
            hidecontainer('W_QTD_UNITS_SERVED_DLD');
            $('#page-container-wqtd').toggle();
            setButtonColor();
            $('#btnError_WQTD').css("background-color", "#C00000");
            $('#btnError_WQTD').css("color", "white");
            showCurrentError('W_QTD_UNITS_SERVED_DLD');
            getWFRJobs('W_QTD_UNITS_SERVED_DLD',
                'tblCurrentWFR_WQTD');
            getDelayedJobs('W_QTD_UNITS_SERVED_DLD',
                'tblDelayJobs_WQTD');
            getSTMissJobs('W_QTD_UNITS_SERVED_DLD',
                'tblSTMissJobs_WQTD');
            getExecJobs('W_QTD_UNITS_SERVED_DLD',
                'tblCurrentExec_WQTD');
            getSuccessJobs('W_QTD_UNITS_SERVED_DLD',
                'tblCurrentSuccess_WQTD');
            getErrorJobs('W_QTD_UNITS_SERVED_DLD',
                'tblCurrentError_WQTD');
            getLongRunJobs('W_QTD_UNITS_SERVED_DLD',
                'tblLongRun_WQTD');
          });

      $('#btnDelayed_WQTD').click(function() {
        setButtonColor();
        $('#btnDelayed_WQTD').css("background-color", "#C00000");
        $('#btnDelayed_WQTD').css("color", "white");
        showDelayedJobs('W_QTD_UNITS_SERVED_DLD');
      });

      $('#btnWFR_WQTD').click(function() {
        setButtonColor();
        $('#btnWFR_WQTD').css("background-color", "#FFFF00");
        showCurrentWFR('W_QTD_UNITS_SERVED_DLD');
      });

      $('#btnLongRun_WQTD').click(function() {
        setButtonColor();
        $('#btnLongRun_WQTD').css("background-color", "#C00000");
        $('#btnLongRun_WQTD').css("color", "white");
        showLongRunJobs('W_QTD_UNITS_SERVED_DLD');
      });

      $('#btnExec_WQTD').click(function() {
        setButtonColor();
        $('#btnExec_WQTD').css("background-color", "#3399FF");
        $('#btnExec_WQTD').css("color", "white");
        showCurrentExec('W_QTD_UNITS_SERVED_DLD');
      });

      $('#btnError_WQTD').click(function() {
        setButtonColor();
        $('#btnError_WQTD').css("background-color", "#C00000");
        $('#btnError_WQTD').css("color", "white");
        showCurrentError('W_QTD_UNITS_SERVED_DLD');
      });

      $('#btnSuccess_WQTD').click(function() {
        setButtonColor();
        $('#btnSuccess_WQTD').css("background-color", "#33CC00");
        $('#btnSuccess_WQTD').css("color", "white");
        showCurrentSuccess('W_QTD_UNITS_SERVED_DLD');
      });

      $('#btnSTMiss_WQTD').click(function() {
        setButtonColor();
        $('#btnSTMiss_WQTD').css("background-color", "#C00000");
        $('#btnSTMiss_WQTD').css("color", "white");
        showCurrentSTMiss('W_QTD_UNITS_SERVED_DLD');
      });

      // BACKLOG_DEMAND details
      $('#refresh_BD').click(function() {
        $('#BD_loader').css('display', 'block');
        $('#refresh_BD').css('display', 'none');
        $('#BD_DET').css('display', 'none');
        $('#BD_WFR').text('-');
        $('#BD_EXEC').text('-');
        $('#BD_ERROR').text('-');
        $('#BD_SUCCESS').text('-');
        $('#BD_STMISS').text('-');
        popult_bd_count();
        setTimeout(function() {
          $('#BD_loader').hide();
          $('#refresh_BD').show();
          $('#BD_DET').show();
        }, 30000);

      });

      $('#BD_DET').click(function() {
        hidecontainer('D_BACKLOG_DEMAND');
        $('#page-container-bd').toggle();
        setButtonColor();
        $('#btnError_BD').css("background-color", "#C00000");
        $('#btnError_BD').css("color", "white");
        showCurrentError('D_BACKLOG_DEMAND');
        getWFRJobs('D_BACKLOG_DEMAND', 'tblCurrentWFR_BD');
        getDelayedJobs('D_BACKLOG_DEMAND', 'tblDelayJobs_BD');
        getSTMissJobs('D_BACKLOG_DEMAND', 'tblSTMissJobs_BD');
        getExecJobs('D_BACKLOG_DEMAND', 'tblCurrentExec_BD');
        getSuccessJobs('D_BACKLOG_DEMAND', 'tblCurrentSuccess_BD');
        getErrorJobs('D_BACKLOG_DEMAND', 'tblCurrentError_BD');
        getLongRunJobs('D_BACKLOG_DEMAND', 'tblLongRun_BD');
      });

      $('#btnDelayed_BD').click(function() {
        setButtonColor();
        $('#btnDelayed_BD').css("background-color", "#C00000");
        $('#btnDelayed_BD').css("color", "white");
        showDelayedJobs('D_BACKLOG_DEMAND');
      });

      $('#btnWFR_BD').click(function() {
        setButtonColor();
        $('#btnWFR_BD').css("background-color", "#FFFF00");
        showCurrentWFR('D_BACKLOG_DEMAND');
      });

      $('#btnLongRun_BD').click(function() {
        setButtonColor();
        $('#btnLongRun_BD').css("background-color", "#C00000");
        $('#btnLongRun_BD').css("color", "white");
        showLongRunJobs('D_BACKLOG_DEMAND');
      });

      $('#btnExec_BD').click(function() {
        setButtonColor();
        $('#btnExec_BD').css("background-color", "#3399FF");
        $('#btnExec_BD').css("color", "white");
        showCurrentExec('D_BACKLOG_DEMAND');
      });

      $('#btnError_BD').click(function() {
        setButtonColor();
        $('#btnError_BD').css("background-color", "#C00000");
        $('#btnError_BD').css("color", "white");
        showCurrentError('D_BACKLOG_DEMAND');
      });

      $('#btnSuccess_BD').click(function() {
        setButtonColor();
        $('#btnSuccess_BD').css("background-color", "#33CC00");
        $('#btnSuccess_BD').css("color", "white");
        showCurrentSuccess('D_BACKLOG_DEMAND');
      });

      $('#btnSTMiss_BD').click(function() {
        setButtonColor();
        $('#btnSTMiss_BD').css("background-color", "#C00000");
        $('#btnSTMiss_BD').css("color", "white");
        showCurrentSTMiss('D_BACKLOG_DEMAND');
      });

      // STD_ITEMS details

      $('#refresh_STD').click(function() {
        $('#STD_loader').css('display', 'block');
        $('#refresh_STD').css('display', 'none');
        $('#STD_DET').css('display', 'none');
        $('#STD_WFR').text('-');
        $('#STD_EXEC').text('-');
        $('#STD_ERROR').text('-');
        $('#STD_SUCCESS').text('-');
        $('#STD_STMISS').text('-');
        popult_std_count();
        setTimeout(function() {
          $('#STD_loader').hide();
          $('#refresh_STD').show();
          $('#STD_DET').show();
        }, 30000);

      });

      $('#STD_DET').click(
          function() {
            hidecontainer('D_AMAZON_STANDARD_ITEMS');
            $('#page-container-std').toggle();
            setButtonColor();
            $('#btnError_STD').css("background-color", "#C00000");
            $('#btnError_STD').css("color", "white");
            showCurrentError('D_AMAZON_STANDARD_ITEMS');
            getWFRJobs('D_AMAZON_STANDARD_ITEMS',
                'tblCurrentWFR_STD');
            getDelayedJobs('D_AMAZON_STANDARD_ITEMS',
                'tblDelayJobs_STD');
            getSTMissJobs('D_AMAZON_STANDARD_ITEMS',
                'tblSTMissJobs_STD');
            getExecJobs('D_AMAZON_STANDARD_ITEMS',
                'tblCurrentExec_STD');
            getSuccessJobs('D_AMAZON_STANDARD_ITEMS',
                'tblCurrentSuccess_STD');
            getErrorJobs('D_AMAZON_STANDARD_ITEMS',
                'tblCurrentError_STD');
            getLongRunJobs('D_AMAZON_STANDARD_ITEMS',
                'tblLongRun_STD');
          });

      $('#btnDelayed_STD').click(function() {
        setButtonColor();
        $('#btnDelayed_STD').css("background-color", "#C00000");
        $('#btnDelayed_STD').css("color", "white");
        showDelayedJobs('D_AMAZON_STANDARD_ITEMS');
      });

      $('#btnWFR_STD').click(function() {
        setButtonColor();
        $('#btnWFR_STD').css("background-color", "#FFFF00");
        showCurrentWFR('D_AMAZON_STANDARD_ITEMS');
      });

      $('#btnLongRun_STD').click(function() {
        setButtonColor();
        $('#btnLongRun_STD').css("background-color", "#C00000");
        $('#btnLongRun_STD').css("color", "white");
        showLongRunJobs('D_AMAZON_STANDARD_ITEMS');
      });

      $('#btnExec_STD').click(function() {
        setButtonColor();
        $('#btnExec_STD').css("background-color", "#3399FF");
        $('#btnExec_STD').css("color", "white");
        showCurrentExec('D_AMAZON_STANDARD_ITEMS');
      });

      $('#btnError_STD').click(function() {
        setButtonColor();
        $('#btnError_STD').css("background-color", "#C00000");
        $('#btnError_STD').css("color", "white");
        showCurrentError('D_AMAZON_STANDARD_ITEMS');
      });

      $('#btnSuccess_STD').click(function() {
        setButtonColor();
        $('#btnSuccess_STD').css("background-color", "#33CC00");
        $('#btnSuccess_STD').css("color", "white");
        showCurrentSuccess('D_AMAZON_STANDARD_ITEMS');
      });
      $('#btnSTMiss_STD').click(function() {
        setButtonColor();
        $('#btnSTMiss_STD').css("background-color", "#C00000");
        $('#btnSTMiss_STD').css("color", "white");
        showCurrentSTMiss('D_AMAZON_STANDARD_ITEMS');
      });

      // Product group details

      $('#refresh_PG').click(function() {
        $('#PG_loader').css('display', 'block');
        $('#refresh_PG').css('display', 'none');
        $('#PG_DET').css('display', 'none');
        $('#PG_WFR').text('-');
        $('#PG_EXEC').text('-');
        $('#PG_ERROR').text('-');
        $('#PG_SUCCESS').text('-');
        $('#PG_STMISS').text('-');
        popult_pg_count();
        setTimeout(function() {
          $('#PG_loader').hide();
          $('#refresh_PG').show();
          $('#PG_DET').show();
        }, 30000);

      });

      $('#PG_DET').click(function() {
        hidecontainer('PRODUCT_GROUPS');
        $('#page-container-pg').toggle();
        setButtonColor();
        $('#btnError_PG').css("background-color", "#C00000");
        $('#btnError_PG').css("color", "white");
        showCurrentError('PRODUCT_GROUPS');
        getWFRJobs('PRODUCT_GROUPS', 'tblCurrentWFR_PG');
        getDelayedJobs('PRODUCT_GROUPS', 'tblDelayJobs_PG');
        getSTMissJobs('PRODUCT_GROUPS', 'tblSTMissJobs_PG');
        getExecJobs('PRODUCT_GROUPS', 'tblCurrentExec_PG');
        getSuccessJobs('PRODUCT_GROUPS', 'tblCurrentSuccess_PG');
        getErrorJobs('PRODUCT_GROUPS', 'tblCurrentError_PG');
        getLongRunJobs('PRODUCT_GROUPS', 'tblLongRun_PG');
      });

      $('#btnDelayed_PG').click(function() {
        setButtonColor();
        $('#btnDelayed_PG').css("background-color", "#C00000");
        $('#btnDelayed_PG').css("color", "white");
        showDelayedJobs('PRODUCT_GROUPS');
      });

      $('#btnWFR_PG').click(function() {
        setButtonColor();
        $('#btnWFR_PG').css("background-color", "#FFFF00");
        showCurrentWFR('PRODUCT_GROUPS');
      });

      $('#btnLongRun_PG').click(function() {
        setButtonColor();
        $('#btnLongRun_PG').css("background-color", "#C00000");
        $('#btnLongRun_PG').css("color", "white");
        showLongRunJobs('PRODUCT_GROUPS');
      });

      $('#btnExec_PG').click(function() {
        setButtonColor();
        $('#btnExec_PG').css("background-color", "#3399FF");
        $('#btnExec_PG').css("color", "white");
        showCurrentExec('PRODUCT_GROUPS');
      });

      $('#btnError_PG').click(function() {
        setButtonColor();
        $('#btnError_PG').css("background-color", "#C00000");
        $('#btnError_PG').css("color", "white");
        showCurrentError('PRODUCT_GROUPS');
      });

      $('#btnSuccess_PG').click(function() {
        setButtonColor();
        $('#btnSuccess_PG').css("background-color", "#33CC00");
        $('#btnSuccess_PG').css("color", "white");
        showCurrentSuccess('PRODUCT_GROUPS');
      });

      $('#btnSTMiss_PG').click(function() {
        setButtonColor();
        $('#btnSTMiss_PG').css("background-color", "#C00000");
        $('#btnSTMiss_PG').css("color", "white");
        showCurrentSTMiss('PRODUCT_GROUPS');
      });

      // O_MS_MRKT details

      $('#refresh_OMS').click(function() {
        $('#OMS_loader').css('display', 'block');
        $('#refresh_OMS').css('display', 'none');
        $('#OMS_DET').css('display', 'none');
        $('#OMS_WFR').text('-');
        $('#OMS_EXEC').text('-');
        $('#OMS_ERROR').text('-');
        $('#OMS_SUCCESS').text('-');
        $('#OMS_STMISS').text('-');
        popult_oms_count();
        setTimeout(function() {
          $('#OMS_loader').hide();
          $('#refresh_OMS').show();
          $('#OMS_DET').show();
        }, 30000);

      });

      $('#OMS_DET').click(function() {
        hidecontainer('O_MS_MARKETPLACES');
        $('#page-container-oms').toggle();
        setButtonColor();
        $('#btnError_OMS').css("background-color", "#C00000");
        $('#btnError_OMS').css("color", "white");
        showCurrentError('O_MS_MARKETPLACES');
        getWFRJobs('O_MS_MARKETPLACES', 'tblCurrentWFR_OMS');
        getDelayedJobs('O_MS_MARKETPLACES', 'tblDelayJobs_OMS');
        getSTMissJobs('O_MS_MARKETPLACES', 'tblSTMissJobs_OMS');
        getExecJobs('O_MS_MARKETPLACES', 'tblCurrentExec_OMS');
        getSuccessJobs('O_MS_MARKETPLACES', 'tblCurrentSuccess_OMS');
        getErrorJobs('O_MS_MARKETPLACES', 'tblCurrentError_OMS');
        getLongRunJobs('O_MS_MARKETPLACES', 'tblLongRun_OMS');
      });

      $('#btnDelayed_OMS').click(function() {
        setButtonColor();
        $('#btnDelayed_OMS').css("background-color", "#C00000");
        $('#btnDelayed_OMS').css("color", "white");
        showDelayedJobs('O_MS_MARKETPLACES');
      });

      $('#btnWFR_OMS').click(function() {
        setButtonColor();
        $('#btnWFR_OMS').css("background-color", "#FFFF00");
        showCurrentWFR('O_MS_MARKETPLACES');
      });

      $('#btnLongRun_OMS').click(function() {
        setButtonColor();
        $('#btnLongRun_OMS').css("background-color", "#C00000");
        $('#btnLongRun_OMS').css("color", "white");
        showLongRunJobs('O_MS_MARKETPLACES');
      });

      $('#btnExec_OMS').click(function() {
        setButtonColor();
        $('#btnExec_OMS').css("background-color", "#3399FF");
        $('#btnExec_OMS').css("color", "white");
        showCurrentExec('O_MS_MARKETPLACES');
      });

      $('#btnError_OMS').click(function() {
        setButtonColor();
        $('#btnError_OMS').css("background-color", "#C00000");
        $('#btnError_OMS').css("color", "white");
        showCurrentError('O_MS_MARKETPLACES');
      });

      $('#btnSuccess_OMS').click(function() {
        setButtonColor();
        $('#btnSuccess_OMS').css("background-color", "#33CC00");
        $('#btnSuccess_OMS').css("color", "white");
        showCurrentSuccess('O_MS_MARKETPLACES');
      });

      $('#btnSTMiss_OMS').click(function() {
        setButtonColor();
        $('#btnSTMiss_OMS').css("background-color", "#C00000");
        $('#btnSTMiss_OMS').css("color", "white");
        showCurrentSTMiss('O_MS_MARKETPLACES');
      });

      // O_GL_PROD details

      $('#refresh_GPG').click(function() {
        $('#GPG_loader').css('display', 'block');
        $('#refresh_GPG').css('display', 'none');
        $('#GPG_DET').css('display', 'none');
        $('#GPG_WFR').text('-');
        $('#GPG_EXEC').text('-');
        $('#GPG_ERROR').text('-');
        $('#GPG_SUCCESS').text('-');
        $('#GPG_STMISS').text('-');
        popult_gpg_count();
        setTimeout(function() {
          $('#GPG_loader').hide();
          $('#refresh_GPG').show();
          $('#GPG_DET').show();
        }, 30000);

      });

      $('#GPG_DET').click(
          function() {
            hidecontainer('O_GL_PROD_GROUP_LINE_MAPPINGS');
            $('#page-container-gpg').toggle();
            setButtonColor();
            $('#btnError_GPG').css("background-color", "#C00000");
            $('#btnError_GPG').css("color", "white");
            showCurrentError('O_GL_PROD_GROUP_LINE_MAPPINGS');
            getWFRJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentWFR_GPG');
            getDelayedJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblDelayJobs_GPG');
            getSTMissJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblSTMissJobs_GPG');
            getExecJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentExec_GPG');
            getSuccessJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentSuccess_GPG');
            getErrorJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblCurrentError_GPG');
            getLongRunJobs('O_GL_PROD_GROUP_LINE_MAPPINGS',
                'tblLongRun_GPG');
          });

      $('#btnDelayed_GPG').click(function() {
        setButtonColor();
        $('#btnDelayed_GPG').css("background-color", "#C00000");
        $('#btnDelayed_GPG').css("color", "white");
        showDelayedJobs('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      $('#btnWFR_GPG').click(function() {
        setButtonColor();
        $('#btnWFR_GPG').css("background-color", "#FFFF00");
        showCurrentWFR('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      $('#btnLongRun_GPG').click(function() {
        setButtonColor();
        $('#btnLongRun_GPG').css("background-color", "#C00000");
        $('#btnLongRun_GPG').css("color", "white");
        showLongRunJobs('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      $('#btnExec_GPG').click(function() {
        setButtonColor();
        $('#btnExec_GPG').css("background-color", "#3399FF");
        $('#btnExec_GPG').css("color", "white");
        showCurrentExec('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      $('#btnError_GPG').click(function() {
        setButtonColor();
        $('#btnError_GPG').css("background-color", "#C00000");
        $('#btnError_GPG').css("color", "white");
        showCurrentError('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      $('#btnSuccess_GPG').click(function() {
        setButtonColor();
        $('#btnSuccess_GPG').css("background-color", "#33CC00");
        $('#btnSuccess_GPG').css("color", "white");
        showCurrentSuccess('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      $('#btnSTMiss_GPG').click(function() {
        setButtonColor();
        $('#btnSTMiss_GPG').css("background-color", "#C00000");
        $('#btnSTMiss_GPG').css("color", "white");
        showCurrentSTMiss('O_GL_PROD_GROUP_LINE_MAPPINGS');
      });

      // D_GL_PROD details

      $('#refresh_GP').click(function() {
        $('#GP_loader').css('display', 'block');
        $('#refresh_GP').css('display', 'none');
        $('#GP_DET').css('display', 'none');
        $('#GLP_WFR').text('-');
        $('#GLP_EXEC').text('-');
        $('#GLP_ERROR').text('-');
        $('#GLP_SUCCESS').text('-');
        $('#GLP_STMISS').text('-');
        popult_glp_count();
        setTimeout(function() {
          $('#GP_loader').hide();
          $('#refresh_GP').show();
          $('#GP_DET').show();
        }, 30000);

      });

      $('#GP_DET').click(function() {
        hidecontainer('D_GL_PRODUCT_LINES');
        $('#page-container-gp').toggle();
        setButtonColor();
        $('#btnError_GP').css("background-color", "#C00000");
        $('#btnError_GP').css("color", "white");
        showCurrentError('D_GL_PRODUCT_LINES');
        getWFRJobs('D_GL_PRODUCT_LINES', 'tblCurrentWFR_GP');
        getDelayedJobs('D_GL_PRODUCT_LINES', 'tblDelayJobs_GP');
        getSTMissJobs('D_GL_PRODUCT_LINES', 'tblSTMissJobs_GP');
        getExecJobs('D_GL_PRODUCT_LINES', 'tblCurrentExec_GP');
        getSuccessJobs('D_GL_PRODUCT_LINES', 'tblCurrentSuccess_GP');
        getErrorJobs('D_GL_PRODUCT_LINES', 'tblCurrentError_GP');
        getLongRunJobs('D_GL_PRODUCT_LINES', 'tblLongRun_GP');
      });

      $('#btnDelayed_GP').click(function() {
        setButtonColor();
        $('#btnDelayed_GP').css("background-color", "#C00000");
        $('#btnDelayed_GP').css("color", "white");
        showDelayedJobs('D_GL_PRODUCT_LINES');
      });

      $('#btnWFR_GP').click(function() {
        setButtonColor();
        $('#btnWFR_GP').css("background-color", "#FFFF00");
        showCurrentWFR('D_GL_PRODUCT_LINES');
      });

      $('#btnLongRun_GP').click(function() {
        setButtonColor();
        $('#btnLongRun_GP').css("background-color", "#C00000");
        $('#btnLongRun_GP').css("color", "white");
        showLongRunJobs('D_GL_PRODUCT_LINES');
      });

      $('#btnExec_GP').click(function() {
        setButtonColor();
        $('#btnExec_GP').css("background-color", "#3399FF");
        $('#btnExec_GP').css("color", "white");
        showCurrentExec('D_GL_PRODUCT_LINES');
      });

      $('#btnError_GP').click(function() {
        setButtonColor();
        $('#btnError_GP').css("background-color", "#C00000");
        $('#btnError_GP').css("color", "white");
        showCurrentError('D_GL_PRODUCT_LINES');
      });

      $('#btnSuccess_GP').click(function() {
        setButtonColor();
        $('#btnSuccess_GP').css("background-color", "#33CC00");
        $('#btnSuccess_GP').css("color", "white");
        showCurrentSuccess('D_GL_PRODUCT_LINES');
      });

      $('#btnSTMiss_GP').click(function() {
        setButtonColor();
        $('#btnSTMiss_GP').css("background-color", "#C00000");
        $('#btnSTMiss_GP').css("color", "white");
        showCurrentSTMiss('D_GL_PRODUCT_LINES');
      });

    });
