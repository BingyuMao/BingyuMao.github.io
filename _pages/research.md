---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

## Papers

[**PK-RNN-V E: A Deep Learning Model Approach to Vancomycin Therapeutic Drug Monitoring Using Electronic Health Record Data**](https://www.sciencedirect.com/science/article/pii/S1532046422001782?via%3Dihub) 

*Journal of Biomedical Informatics, August 2022.* <br/>

Masayuki Nigo, Hong Thoai Nga Tran, Ziqian Xie, Han Feng, **Bingyu Mao**,  Laila Rasmy, Hongyu Miao,  Degui Zhi  <br/>


  <details>
  <summary>Abstract</summary>
Vancomycin is a commonly used antimicrobial in hospitals, and therapeutic drug monitoring (TDM) is required to optimize its efficacy and avoid toxicities. Bayesian models are currently recommended to predict the antibiotic levels. These models, however, although using carefully designed lab observations, were often developed in limited patient populations. The increasing availability of electronic health record (EHR) data offers an opportunity to develop TDM models for real-world patient populations. <br/>

Here, we present a deep learning-based pharmacokinetic prediction model for vancomycin (PK-RNN-V E) using a large EHR dataset of 5,483 patients with 55,336 vancomycin administrations. PK-RNN-V E takes the patient’s real-time sparse and irregular observations and offers dynamic predictions. Our results show that RNN-PK-V E offers a root mean squared error (RMSE) of 5.39 and outperforms the traditional Bayesian model (VTDM model) with an RMSE of 6.29. We believe that PK-RNN-V E can provide a pharmacokinetic model for vancomycin and other antimicrobials that require TDM. Statement of Significance Problem Current traditional Bayesian models for vancomycin levels were tested in only a limited patient population and take limited patient-specific features. Hence, a more flexible and powerful model, such as deep-learning models, may provide significant advantages. <br/>
</details>


[**Recurrent neural network models (CovRNN) for predicting outcomes of patients with COVID-19 on admission to hospital: model development and validation using electronic health record data**](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(22)00049-8/fulltext) 

*The Lancet Digital Health, April 2022.* <br/>

Laila Rasmy, Masayuki Nigo, Bijun Sai Kannadath, Ziqian Xie, **Bingyu Mao**, Khush Patel, Yujia Zhou, Wanheng Zhang, Angela Ross, Hua Xu, Degui Zhi  <br/>


  <details>
  <summary>Abstract</summary>
Predicting outcomes of COVID-19 patients at an early stage is critical for optimized clinical care and resource management, especially during a pandemic. Although multiple machine learning models have been proposed to address this issue, based on the need for extensive data pre-processing and feature engineering, these models have not been validated or implemented outside of the original study site. <br/>

In this study, we developed recurrent neural network-based models (CovRNN) to predict the outcomes of patients with COVID-19 by use of available electronic health record data on admission to hospital, without the need for specific feature selection or missing data imputation. CovRNN was designed to predict three outcomes: in-hospital mortality, need for mechanical ventilation, and prolonged hospital stay (>7 days). For in-hospital mortality and mechanical ventilation, CovRNN produced time-to-event risk scores (survival prediction; evaluated by the concordance index) and all-time risk scores (binary prediction; area under the receiver operating characteristic curve AUROC was the main metric); we only trained a binary classification model for prolonged hospital stay. For binary classification tasks, we compared CovRNN against traditional machine learning algorithms: logistic regression and light gradient boost machine. Model performance was evaluated in the multi-hospital test set. <br/>

CovRNN binary models achieved AUROCs of 93·0% (95% CI 92·6–93·4) for the prediction of in-hospital mortality, 92·9% (92·6–93·2) for the prediction of mechanical ventilation, and 86·5% (86·2–86·9) for the prediction of a prolonged hospital stay, outperforming light gradient boost machine and logistic regression algorithms. External validation confirmed AUROCs in similar ranges (91·3–97·0% for in-hospital mortality prediction, 91·5–96·0% for the prediction of mechanical ventilation, and 81·0–88·3% for the prediction of prolonged hospital stay). For survival prediction, CovRNN achieved a concordance index of 86·0% (95% CI 85·1–86·9) for in-hospital mortality and 92·6% (92·2–93·0) for mechanical ventilation. <br/>
</details>



## Presentations


[**A deep-learning-based two-compartment predictive model (PKRNN-2CM) for vancomycin therapeutic drug monitoring**](/files/ICHI_v2.pdf) <br/>

**Bingyu Mao**, Ziqian Xie, Laila Rasmy, Masayuki Nigo, Degui Zhi <br/>


**Presented at**: IEEE ICHI 2023, Houston, TX. <br/>

  <details>
  <summary>Abstract</summary>
Vancomycin is a widely used antibiotic that requires therapeutic drug monitoring (TDM) for optimized individual dosage. The pharmacokinetic (PK) parameters for vancomycin TDM can be estimated using deep learning techniques that have the advantage of handling irregularly sampled time series electronic health record (EHR) data. When developing population vancomycin PK models in adults, a two-compartment model is most commonly considered. This study developed a two-compartment vancomycin TDM model (PKRNN-2CM) with recurrent neural network (RNN) to predict vancomycin concentration and compared its performance with a one-compartment deep-learning predictive model (PKRNN). A p-value of 0.01 indicates that the PKRNN-2CM model outperformed the PKRNN model. Additional model evaluation done with simulation indicate that the PKRNN-2CM model outperforms the PKRNN model, even at unsampled time points. Our findings have the potential to improve the accuracy and effectiveness of personalized vancomycin TDM, leading to better clinical outcomes for patients receiving vancomycin. <br/>
</details>


[**Med-BERT v2: clinical foundation model on standardized secondary clinical data**](/files/MBV2.pdf) <br/>

Laila Rasmy, Yan Chu, **Bingyu Mao**, Khush Patel, Zhao Li, Hao Yan, Ziqian Xie, Wenjin Zheng, Hua Xu, Degui Zhi <br/>


**Presented at**: Machine Learning For Healthcare 2022, Durham, NC. <br/>

  <details>
  <summary>Abstract</summary>
Deep learning (DL) based predictive models from electronic health records (EHR) deliver impressive performance in many clinical tasks. The need for large training cohorts, however, are often required, hindering the adoption of DL-based models in scenarios with limited training data size. In our previous work, we showed that [Med-BERT](https://github.com/ZhiGroup/Med-BERT) trained on patients diagnoses data in standard ICD codes from more than 20 million patients’ EHR substantially improves the prediction accuracy for tasks with small cohorts. Med-BERT improved the discriminative accuracy of tasks with fine-tuning training sets of a few hundred samples boosting the AUC by more than 20% or equivalent to the AUC of 10 times larger training sets. <br/>

Adding more patient information including medications and procedures are known to further increase the prediction accuracy for many clinical tasks. However, when we use the earlier version of Med-BERT trained on diagnoses information alone and add to it randomly initialized embeddings for medications and procedures, the magnitude of performance boost it offers deteriorates. Therefore, we trained a new version of Med-BERT adding medications and procedures data. Additionally, we compared the performance of the Med-BERT model trained on claims data (MBv2-Claims) versus the model originally trained on EHR data (MBv2-EHR) to evaluate the generalizability of our approach as well as the generalizability of the pre-trained model. <br/>
</details>


## Posters

[**Technical Performance Evaluation of a Deep Learning-based Vancomycin Therapeutic Drug Monitoring Model**](/files/PKRNN_Poster.pdf) <br/>

**Bingyu Mao**, Masayuki Nigo, Hong Thoai Nga Tran, Ziqian Xie, Han Feng, Laila Rasmy, Hongyu Miao, Degui Zhi <br/>


**Presented at**: AMIA 2022 Informatics Summit, Chicago, IL. <br/>

  <details>
  <summary>Abstract</summary>
Vancomycin therapeutic drug monitoring is recommended by national guidelines. We developed a deep learning-based pharmacokinetic model for personalized vancomycin level prediction (PK-RNN-V) using readily available electronic medical records data which achieves more accurate results than the current Bayesian models in the use for precision dosing. We will present our technical performance evaluation results of our PK-RNN-V models against the Bayesian model (VTDM) using Root Mean Square Error, Mean Absolute Error, and Mean Absolute Percentage Error. <br/>
</details>


[**A multi-aspect technical performance evaluation of deep learning based models for predicting COVID-19 patients outcomes on admission**](/files/CovRNN_poster.pdf) <br/>

Laila Rasmy, Masayuki Nigo, Bijun Sai Kannadath, Ziqian Xie, **Bingyu Mao**, Angela Ross, Hua Xu, Degui Zhi <br/>


**Presented at**: AMIA 2022 Informatics Summit, Chicago, IL. <br/>

  <details>
  <summary>Abstract</summary>
While a comprehensive evaluation plan needs to be agreed on during the early phase of prediction task definition, we propose six factors that need to be considered during the evaluation of the implementability of a predictive model. Those factors are prediction performance, transparency, generalizability, data mechanics, efficiency, and data privacy. Those factors should be considered starting from phases 0, 1 as described in the AI evaluation framework1 and continuously monitored and improved as we go through all phases till phase 4. <br/>
</details>

