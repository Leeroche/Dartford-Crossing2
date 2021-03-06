const express = require('express');
const router = express.Router();

const verNum = 1;



//EXAMPLE ROUTING START

router.post(`/v${verNum}/role/application/change-cv`, function (req, res) {
    const newCV = req.session.data['use-profile-cv'];

    if (newCV === 'no') {
        res.redirect(`/v${verNum}/role/application/cv-load`);
    } else {
        res.redirect(`/v${verNum}/role/main-application-dashboard`);
    }
});


//EXAMPLE ROUTING END


//V1 beta routing starts here

router.post(`/beta/v${verNum}/landing`, function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect(`/beta/v${verNum}/start_page/landing_page/landing/one-off-payment/pay-crossing`)
  } else if (editChoice === 'create-account') {
    res.redirect(`/beta/v${verNum}/create_account/account_email`)
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect(`/beta/v${verNum}/start_page/landing_page/landing/resolve-pcn/flow1`)
  }
});



//V1 beta routing ends here












































// Add your routes here - above the module.exports line
// Create a section for the screens the routes will be for



// create-start //

router.post('/v01/create-account/step4-code', function (req, res) {
  const editChoice = req.session.data['step4-code']
//if user chooses mobile authenticator redirect to app
  if (editChoice === 'authenticator-app') {
    res.redirect('/v01/create-account/2fa-app')
    //if user chooses mobile phone redirect to mobile

  } else if (editChoice === 'mobile-phone') {
    res.redirect('/v01/create-account/2fa-mobile')
  }
});

router.get('/examples/template-data', function(req, res) {
    res.render('examples/template-data', { 'name' : 'Foo' });
});

//////////////////Landing page choices //////////////////////////////////////

// Landing page 01 //
router.post('/v01/landing', function (req, res) {
  const editChoice = req.session.data['landing']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v01/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v01/create-account/create-account')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v01/resolve-pcn/payConfirm')
  }
});

// Landing page 02 //
router.post('/v02/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v02/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v02/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v02/resolve-pcn/payConfirm')
  }
});

// Landing page 03 //
router.post('/v03/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v03/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v03/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v03/resolve-pcn/payConfirm')
  }
});

// Landing page 04 //
router.post('/v04/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v04/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v04/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    //res.redirect('/v04/resolve-pcn/payConfirm')
    res.redirect('/v04/resolve-pcn/flow1')
  }
});

// Landing page 05 //
router.post('/v05/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v05/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v05/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v05/resolve-pcn/flow1')
  }
});


/////////////////////////create account v04///////////////////////////////

///is this your vehicle v04///
router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v05/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v05/create-account/vehicle-registration')
  }
});

//////Top up - payment1 v04///
router.post('/CheckPaymentOption', function (req, res) {
  var payoption = req.session.data['type-choose']
  if (payoption == "Prepay"){
    // Send user to Prepay page
    res.redirect('v05/create-account/payment2')
  } else  if (payoption == "PAYG"){
    // Send user to PAYG page
    res.redirect('v05/create-account/payment2b')
  }

});


///////Top up - auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v05/create-account/payment3a')
  } else  if (topupoption == "manual"){
    res.redirect('v05/create-account/payment3a')
  }
});


//////////////////////////Manage-account v05//////////////////////////////


/////////////////////////One off payment flow v05////////////////////////
router.post("/v05/one-off-payment/pay-crossing", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/vehicle-info`);
});



router.post("/v05/one-off-payment/vehicle-info", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  if (req.body['vehicle-owner']) {
    if (req.body['vehicle-owner'] === 'Yes') {
      res.redirect("payment-info-single");
    } else if (req.body['vehicle-owner'] === 'No') {
      res.redirect("/v05/one-off-payment/pay-crossing");
    }
  }
});
router.post("/v05/one-off-payment/payment-info-single", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/payment-options`);
});

router.post("/v05/one-off-payment/payment-info-future", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/payment-options`);
});

router.post("/v05/one-off-payment/payment-options", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/confirm-card-payment`);
});

// router.get("/v05/one-off-payment/payment-info-single", function (req, res) {
//   const {
//     data
//   } = req.session;
//   res.render(`/v05/one-off-payment/payment-info-single`, data);
// });

// router.get("/v05/one-off-payment/payment-info-future", function (req, res) {
//   const {
//     data
//   } = req.session;
//   res.redirect(data, `/v05/one-off-payment/payment-info-future`);
// });


/////////////////////////Resolve pcn v05//////////////////////////////////

router.get("/v05/resolve-pcn/flow1", function (req, res) {
  res.redirect('/v05/resolve-pcn/landingRemod');
});

router.get("/v05/resolve-pcn/flow2", function (req, res) {
  res.redirect(`/v05/resolve-pcn/vehicleRemod`);
});

router.get("/v05/resolve-pcn/flow2Alt", function (req, res) {
  res.redirect(`/v05/resolve-pcn/vehicleRemodAlt`);
});

router.get("/v05/resolve-pcn/flow4", function (req, res) {
  res.redirect(`/v05/resolve-pcn/outstandingRemod`);
});

router.get("/v05/resolve-pcn/flow5b", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcn_details`);
});

router.get("/v05/resolve-pcn/flow5a", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcn_details_b`);
});

router.get("/v05/resolve-pcn/flow5details", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnDetails`);
});

router.get("/v05/resolve-pcn/flow6", function (req, res) {
  res.redirect(`/v05/resolve-pcn//payDetails`);
});

router.get("/v05/resolve-pcn/flow6details", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnDetailsPay`);
});

router.get("/v05/resolve-pcn/flow7", function (req, res) {
  res.redirect(`/v05/resolve-pcn//confirmPay`);
});

router.get("/v05/resolve-pcn/flow8", function (req, res) {
  res.redirect(`/v05/resolve-pcn/payConfirm`);
});

router.get("/v05/resolve-pcn/flow9", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengePCNremod`);
});

router.get("/v05/resolve-pcn/flow10", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnChallengeReasons`);
});

router.get("/v05/resolve-pcn/flow11", function (req, res) {
  res.redirect(`/v05/resolve-pcn/supportingEvidence`);
});

router.get("/v05/resolve-pcn/flow13", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengeSummary`);
});

router.get("/v05/resolve-pcn/flow14", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengePCNchange`);
});

router.get("/v05/resolve-pcn/flow15", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnChallengeReasonsChange`);
});

router.get("/v05/resolve-pcn/flow16", function (req, res) {
  res.redirect(`/v05/resolve-pcn/supportingEvidenceChange`);
});

router.get("/v05/resolve-pcn/flow17", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengeConfirm`);
});

router.get("/information/charges-fines", function (req, res) {
  res.render(`/v05/information/charges-fines`);
});

/////////////////////////create account v05///////////////////////////////

///is this your vehicle v04///
router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v04/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v04/create-account/vehicle-registration')
  }
});

//////Top up - payment1 v04///
router.post('/CheckPaymentOption', function (req, res) {
  var payoption = req.session.data['type-choose']
  if (payoption == "Prepay"){
    // Send user to Prepay page
    res.redirect('v04/create-account/payment2')
  } else  if (payoption == "PAYG"){
    // Send user to PAYG page
    res.redirect('v04/create-account/payment2b')
  }

});


///////Top up - auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v04/create-account/check-answers-auto')
  } else  if (topupoption == "manual"){
    res.redirect('v04/create-account/check-answers-manual')
  }
});


//////////////////////////Manage-account v04//////////////////////////////


/////////////////////////One off payment flow v04////////////////////////

/////////////////////////one off payment flow////////////////////////
// one off payment
router.post("/v04/one-off-payment/pay-crossing", function (req, res) {

  res.redirect("/v04/one-off-payment/vehicle-info");

});

/////////////////////////resolve pcn////////////////////////
// Resolve PCN
router.get("/v04/resolve-pcn/flow1", function (req, res) {
  res.redirect('/v04/resolve-pcn/landingRemod');
});

router.get("/v04/resolve-pcn/flow2", function (req, res) {
  res.redirect(`/v04/resolve-pcn/vehicleRemod`);
});

router.get("/v04/resolve-pcn/flow2Alt", function (req, res) {
  res.redirect(`/v04/resolve-pcn/vehicleRemodAlt`);
});

router.get("/v04/resolve-pcn/flow4", function (req, res) {
  res.redirect(`/v04/resolve-pcn/outstandingRemod`);
});

router.get("/v04/resolve-pcn/flow5b", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcn_details`);
});

router.get("/v04/resolve-pcn/flow5a", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcn_details_b`);
});
/////////////////////////Resolve pcn v04//////////////////////////////////

router.get("/v04/resolve-pcn/flow5details", function (req, res) {
  res.redirect(`/v04/resolve-pcn//pcnDetails`);
});

router.get("/v04/resolve-pcn/flow6", function (req, res) {
  res.redirect(`/v04/resolve-pcn//payDetails`);
});

router.get("/v04/resolve-pcn/flow6details", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnDetailsPay`);
});

router.get("/v04/resolve-pcn/flow7", function (req, res) {
  res.redirect(`/v04/resolve-pcn//confirmPay`);
});

router.get("/v04/resolve-pcn/flow8", function (req, res) {
  res.redirect(`/v04/resolve-pcn/payConfirm`);
});

router.get("/v04/resolve-pcn/flow9", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengePCNremod`);
});

router.get("/v04/resolve-pcn/flow10", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnChallengeReasons`);
});

router.get("/v04/resolve-pcn/flow11", function (req, res) {
  res.redirect(`/v04/resolve-pcn/supportingEvidence`);
});

router.get("/v04/resolve-pcn/flow13", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengeSummary`);
});

router.get("/v04/resolve-pcn/flow14", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengePCNchange`);
});

router.get("/v04/resolve-pcn/flow15", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnChallengeReasonsChange`);
});

router.get("/v04/resolve-pcn/flow16", function (req, res) {
  res.redirect(`/v04/resolve-pcn/supportingEvidenceChange`);
});

router.get("/v04/resolve-pcn/flow17", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengeConfirm`);
});

router.get("/information/charges-fines", function (req, res) {
  res.render(`/v04/information/charges-fines`);
});






module.exports = router