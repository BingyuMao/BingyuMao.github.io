---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

[**PK-RNN-V E: A Deep Learning Model Approach to Vancomycin Therapeutic Drug Monitoring Using Electronic Health Record Data**](https://www.sciencedirect.com/science/article/pii/S1532046422001782?via%3Dihub) 

Masayuki Nigo, Hong Thoai Nga Tran, Ziqian Xie, Han Feng, **Bingyu Mao**,  Laila Rasmy, Hongyu Miao,  Degui Zhi  <br/>

*Journal of Biomedical Informatics, August 2022.* <br/>

  <details>
  <summary>Abstract</summary>
Vancomycin is a commonly used antimicrobial in hospitals, and therapeutic drug monitoring (TDM) is required to optimize its efficacy and avoid toxicities. Bayesian models are currently recommended to predict the antibiotic levels. These models, however, although using carefully designed lab observations, were often developed in limited patient populations. The increasing availability of electronic health record (EHR) data offers an opportunity to develop TDM models for real-world patient populations. <br/>

Here, we present a deep learning-based pharmacokinetic prediction model for vancomycin (PK-RNN-V E) using a large EHR dataset of 5,483 patients with 55,336 vancomycin administrations. PK-RNN-V E takes the patient’s real-time sparse and irregular observations and offers dynamic predictions. Our results show that RNN-PK-V E offers a root mean squared error (RMSE) of 5.39 and outperforms the traditional Bayesian model (VTDM model) with an RMSE of 6.29. We believe that PK-RNN-V E can provide a pharmacokinetic model for vancomycin and other antimicrobials that require TDM. <br/>
</details>


[**Recurrent neural network models (CovRNN) for predicting outcomes of patients with COVID-19 on admission to hospital: model development and validation using electronic health record data**](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(22)00049-8/fulltext) 

Laila Rasmy, Masayuki Nigo, Bijun Sai Kannadath, Ziqian Xie, **Bingyu Mao**, Khush Patel, Yujia Zhou, Wanheng Zhang, Angela Ross, Hua Xu, Degui Zhi  <br/>

*The Lancet Digital Health, April 2022.* <br/>

  <details>
  <summary>Abstract</summary>
Predicting outcomes of COVID-19 patients at an early stage is critical for optimized clinical care and resource management, especially during a pandemic. Although multiple machine learning models have been proposed to address this issue, based on the need for extensive data pre-processing and feature engineering, these models have not been validated or implemented outside of the original study site. <br/>

In this study, we developed recurrent neural network-based models (CovRNN) to predict the outcomes of patients with COVID-19 by use of available electronic health record data on admission to hospital, without the need for specific feature selection or missing data imputation. CovRNN was designed to predict three outcomes: in-hospital mortality, need for mechanical ventilation, and prolonged hospital stay (>7 days). For in-hospital mortality and mechanical ventilation, CovRNN produced time-to-event risk scores (survival prediction; evaluated by the concordance index) and all-time risk scores (binary prediction; area under the receiver operating characteristic curve AUROC was the main metric); we only trained a binary classification model for prolonged hospital stay. For binary classification tasks, we compared CovRNN against traditional machine learning algorithms: logistic regression and light gradient boost machine. Model performance was evaluated in the multi-hospital test set. <br/>

CovRNN binary models achieved AUROCs of 93·0% (95% CI 92·6–93·4) for the prediction of in-hospital mortality, 92·9% (92·6–93·2) for the prediction of mechanical ventilation, and 86·5% (86·2–86·9) for the prediction of a prolonged hospital stay, outperforming light gradient boost machine and logistic regression algorithms. External validation confirmed AUROCs in similar ranges (91·3–97·0% for in-hospital mortality prediction, 91·5–96·0% for the prediction of mechanical ventilation, and 81·0–88·3% for the prediction of prolonged hospital stay). For survival prediction, CovRNN achieved a concordance index of 86·0% (95% CI 85·1–86·9) for in-hospital mortality and 92·6% (92·2–93·0) for mechanical ventilation. <br/>
</details>
