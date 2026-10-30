/* 编辑这个文件即可修改全部个人资料。保留英文逗号、引号与括号。
   示例不是你的履历；请逐项替换。Windows 建议用 VS Code 打开整个模板文件夹。 */
window.PORTFOLIO = {
  showDemoBanner: false, // 全部替换完成后改成 false
  name: "Xue Tianxin",
  initials: "XT",
  role: "MSc Robotics student | Bachelor of Engineering in Artificial Intelligence",
  location: "The University of Manchester / Manchester",
  bio:
    "I am an MSc Robotics student at the University of Manchester, with a background in artificial intelligence. I am interested in connecting robust visual perception with decision-making and action in embodied intelligent systems.",

  about:
    "My background in artificial intelligence has developed through projects in face anti-spoofing, hyperspectral classification, object detection and language-model distillation. These experiences have involved implementing models, investigating how they learn and evaluating their behaviour across different data and experimental settings. I am now extending this foundation through my MSc in Robotics.",

  interests:
    "I hope to pursue further research in embodied intelligence and cognitive robotics, with a particular focus on robust perception. My longer-term goal is to develop algorithms that help robots perceive, reason and act reliably in real-world environments.",
  email: "xuetianxin1@gmail.com", // 例如 name@example.com；留空时显示设置提示，不生成假链接
  github: "https://github.com/xueeux", // 完整 https://github.com/... 地址
  linkedin: "https://www.linkedin.com/in/tianxin-xue-170818445/", // 完整 https://www.linkedin.com/in/.../ 地址
  portrait: "assets/avatar.jpg", // 换成 assets/portrait.jpg 后在此修改文件名
  portraitAlt: "Placeholder portrait; replace with your own photograph",
  cv: {
    enabled: true, // 把 CV 放到 assets/cv.pdf，再改为 true
    file: "assets/CV_Xue_Tianxin_20261017.pdf",
    downloadName: "Xue_Tianxin_CV.pdf"
  },
  skills: [
    {group: "Programming", items: ["Python", "C/C++", "Java", "SQL", "MATLAB"]},
    {group: "Robotics", items: ["ROS 2", "NLP", "Computer vision", "Deep Learning"]},
    {group: "Tools & workflow", items: ["PyCharm", "GIT", "Wireshark", "Linux / Shell", "Oracle SQL", "Visual C++"]},
    {group: "Practice", items:["Mathematical modelling", "Model reimplementation", "Face-Anti-Spoofing"]}
  ],
  education: [
    {degree: "MSc Robotics with Extended Research", school: "the University of Manchester, England", dates: "09/2026 – 06/2028", detail: "Relevant study: Robotic Systems, Cognitive Robotics and Computer Vision, Software for Robotics."},
    {degree: "Bachelor of Engineering in Artificial Intelligence", school: "Jinan University, China", dates: "09/2022-06/2026", detail: "Relevant study: Deep Learning, Machine learning, Natual Languege Processing, Computer Vision, AI principles."}
  ],
  projects: [
    {
      id: "usdan-ssdg",
      number: "01",
      category: "Graduation Thesis",

      title: "USDAN-SSDG: Face Anti-Spoofing",

      subtitle:
        "SEMI-SUPERVISED UNILATERAL ADVERSARIAL DOMAIN GENERALISATION FOR FACE ANTI-SPOOFING",

      summary:
        "Developed an SSDG-based face anti-spoofing framework using limited labelled and additional unlabelled target-domain data. In the thesis experiments, HTER decreased from 26.0% for the SSDG baseline to 9.2%, with an AUC of 96.89%.",

      image:
        "assets/face_anti_spoofing/frame.png",

      imageAlt:
        "Overview of the proposed USDAN-SSDG face anti-spoofing framework",

      images: [
        {
          src:
            "assets/face_anti_spoofing/frame.png",

          alt:
            "Architecture of the USDAN-SSDG framework",

          caption:
            "Framework overview: feature extraction, an embedding network, a live/spoof classifier and a domain-discrimination branch containing two adversarial discriminators."
        },

        {
          src:
            "assets/face_anti_spoofing/training_process.png",

          alt:
            "Training-process visualisation for USDAN-SSDG",

          caption:
            "Training process: optimisation of the proposed semi-supervised face anti-spoofing framework."
        },

        {
          src:
            "assets/face_anti_spoofing/comparative_experiment1.png",

          alt:
            "Comparative experiments for the proposed face anti-spoofing method",

          caption:
            "Comparative experiments examining the contribution of the proposed components under the thesis evaluation setting."
        },

        {
          src:
            "assets/face_anti_spoofing/comparison_with_existing_model.png",

          alt:
            "Comparison with existing face anti-spoofing models",

          caption:
            "Model comparison: results should be interpreted alongside the target-domain data access and evaluation protocols documented in the thesis."
        },

        {
          src:
            "assets/face_anti_spoofing/feature_visualization.png",

          alt:
            "Feature-space visualisation for the face anti-spoofing experiments",

          caption:
            "Feature visualisation: qualitative inspection of genuine and spoof feature distributions across the experimental domains."
        },

        {
          src:
            "assets/face_anti_spoofing/test_data_result_oulu.png",

          alt:
            "Face anti-spoofing evaluation results on OULU-NPU",

          caption:
            "OULU-NPU evaluation: the thesis reports an HTER of 9.2% and an AUC of 96.89% for the proposed method."
        },

        {
          src:
            "assets/face_anti_spoofing/test_data_result_AI.png",

          alt:
            "Exploratory evaluation on AI-generated face samples",

          caption:
            "Additional exploratory tests on AI-generated face samples, assessing behaviour beyond the main cross-dataset evaluation."
        }
      ],

      tags: [
        "Vision",
        "Python",
        "Face Anti-Spoofing",
        "Semi-supervised Learning",
        "Domain-Adversarial Learning",
        "Consistency Regularisation",
        "Feature Alignment"
      ],

      role:
        "Developed the proposed SSDG-based extension for my graduation thesis, implemented the training and evaluation workflow, and conducted comparative, ablation and feature-visualisation experiments.",

      method:
        "Used CASIA-FASD, MSU-MFSD and Idiap Replay-Attack as source domains, with OULU-NPU as the target domain. Combined single-side source-domain adversarial learning and asymmetric triplet loss with target-domain supervision, patch-shuffling consistency, entropy minimisation, additional domain-adversarial alignment and genuine-sample centre alignment.",

      outcome:
        "Under the experimental setting documented in my thesis, HTER decreased from 26.0% for the SSDG baseline to 9.2%, a reduction of 16.8 percentage points, while AUC reached 96.89%. Ablation experiments supported the contribution of the semi-supervised components and patch-based augmentation. Additional tests explored detection of AI-generated faces.",

      reflection:
        "The work investigated how target-domain information can complement single-side domain generalisation. Its results should be interpreted with the target-domain label budget, data splits and attack coverage specified in the thesis.",

      evidenceUrl:
        "assets/face_anti_spoofing/USDAN_SSDG_Thesis.pdf",

      evidenceLabel:
        "Read graduation thesis (PDF)",

      // 确认源码可公开、并完成上传后，再填入真实地址
      codeUrl: "https://github.com/xueeux/USDAN-SSDG",

      credit:
        "Based on SSDG (Jia et al., CVPR 2020) and informed by USDAN (Jia et al., Pattern Recognition 2021). Thesis contributions include method integration, implementation changes and experimental evaluation. Original methods and code are credited to their respective authors."
    },
    {
      id: "gaze-tracking", number: "02", category: "Researches",
      title: "Gaze Tracking",
      subtitle: "Gaze Tracking Algorithm Based on L2CS Framework and Efficient Net-TSM and Its Application in Public Security Early Warning",
      summary: "This project designs and implements a deep learning-based model that extracts gaze direction vectors of individuals and matches their gaze targets. ",
      image: "assets/Gaze_project/Dataset_prediction.png", imageAlt: "The test of gaze point heat map for monitoring suspected individuals in actual security scenarios",
      images: [
        {
          src: "assets/Gaze_project/Gaze_Estimation_Network_Architecture.png",
          alt: "System architecture",
          caption: "Gaze Estimation Network Architecture"
        },
        {
          src: "assets/Gaze_project/aim_training.png",
          alt: "training process",
          caption: "Predict gaze vector training process."
        },
        {
          src: "assets/Gaze_project/Gaze_Heatmap.png",
          alt: "Experimental results",
          caption: "The test of gaze point heat map on training dataset"
        },
        {
          src: "assets/Gaze_project/Dataset_prediction.png",
          alt: "Experimental results",
          caption: "The test of gaze point heat map for monitoring suspected individuals in actual security scenarios"
        }
      ],
      tags: ["Vision","Python", "Gaze vector prediction", "Deep learning"],
      role: "Team Leader. Directed a four-phase plan: early on, aligned the team on RetinaFace/L2CS-Net improvements, built the dataset and a three-layer coordinate framework; later, led training and optimisation of the dual-path gaze-target model, the suspect-flagging interface, and the paper.",
      method: "Built a four-stage spherical-projection coordinate chain that maps panoramic pixel coordinates to 3D gaze vectors, then used an EfficientNet-B4 backbone with a dual-head design for joint classification-regression of gaze direction. Gaze-target prediction follows a three-stage progressive scheme with multi-scale feature fusion built on L2CS-Net, covering both close-range precision and long-range scene awareness. Key decision: decoupling gaze-vector estimation from target prediction so each stage could be tuned independently.",
      outcome: "The full pipeline — RetinaFace detection, spherical-projection gaze estimation, and L2CS-Net-based gaze-target prediction — runs end-to-end and outputs alerts when a person's gaze target matches a calibrated sensitive object. ",
      reflection: "In crowded scenes, data collection is costly and false alerts arise when involuntary saccades or gaze-estimation jitter make the system flag a sensitive object the person never fixated on. Next step: a temporal smoothing filter that suppresses jitter without adding latency, plus an attention-state module that separates intentional fixation from incidental saccades before an alert is raised.",
      evidenceUrl: "assets/Gaze_project/Gaz_Tracking_Algorithm_Based_on_L2CS_Framework_and_Efficient_Net_TSM_and_Its_Application_in_Public_Security_Early_Warning.pdf", evidenceLabel: "Project report (PDF)",
      credit: "Group work"
    },
    {
      id: "soil-hyperspectral", number: "03", category: "Researches",
      title: "Few-shot Soil Hyperspectral Classification",
      subtitle: "Soil Detection Model and Application Based on Gia-CFSL Deep Network Hyperspectral Image Classification",
      summary: "Developed a cross-domain few-shot learning framework for soil hyperspectral classification, using source-domain knowledge to support recognition with limited labelled target-domain data.",
      image: "assets/Soil_project/Gia_CFSL_model_architecture_diagram.png", imageAlt: "Architecture of the Gia-CFSL cross-domain few-shot learning model",
      images: [
        {
          src:
            "assets/Soil_project/Gia_CFSL_model_architecture_diagram.png",

          alt:
            "Gia-CFSL architecture showing data preprocessing, feature extraction, cross-domain few-shot learning, loss computation and evaluation",

          caption:
            "Model architecture: source- and target-domain data are processed through feature extraction and cross-domain learning, with multiple loss terms supporting model optimisation."
        },

        {
          src:
            "assets/Soil_project/processed_dataset.png",

          alt:
            "Pseudo-RGB visualisation of the cropped source hyperspectral dataset",

          caption:
            "Data preprocessing: a pseudo-RGB visualisation of the cropped source hyperspectral dataset, providing a spatial overview of the processed data."
        },

        {
          src:
            "assets/Soil_project/sample_visualized_in_reflectance.png",

          alt:
            "Normalised reflectance visualisation of source-dataset sample 0 across seven visible-light bands",

          caption:
            "Spectral inspection: normalised reflectance visualisation of source-dataset sample 0 across seven visible-light bands."
        }
      ],
      tags: ["Vision", "Python","Hyperspectral Imaging","Few-shot Learning", "Domain Adaptation","Attention Mechanisms"],
      role: "As a team member, I reviewed soil hyperspectral research, processed the collected data, and contributed to the design of a cross-domain aligned few-shot classification framework.",
      method: "Used meta-task-driven training to learn transferable CNN feature representations. Developed an attention-based module for feature and distribution similarity, supported by multi-objective loss optimisation to improve cross-domain adaptation.",
      outcome: "Developed a few-shot recognition model for soil element content by transferring knowledge from data-rich source domains to a target domain with limited labelled samples.",
      reflection: "The project addressed the challenge of learning from limited labelled soil data while accounting for differences between source and target domains.",
      evidenceUrl: "assets/Soil_project/Soil_detection_report.pdf", evidenceLabel: "Project report (PDF)",
      credit: "Group work"
    },
    {
      id: "apmcm-pet-market",
      number: "04",
      category: "Competition",

      title: "Pet Market Analysis & Forecasting",

      subtitle:
        "APMCM · FIRST PRIZE, Pet market analysis model based on multiple regression and grey prediction models",

      summary:
        "Led an award-winning mathematical modelling project combining regression and grey forecasting to analyse the pet industry and forecast global pet food demand and China's pet food production and exports over a three-year horizon.",

      // 首页项目封面
      image:
        "assets/Math_modeling/forecast_of_global_demand_for_pet.png",

      imageAlt:
        "Forecast of global pet food demand",

      // 项目详情：三张轮播图片及各自的说明
      images: [
        {
          src:
            "assets/Math_modeling/forecast_of_global_demand_for_pet.png",

          alt:
            "Three-year forecast of global pet food demand",

          caption:
            "Global market outlook: a grey forecasting model was used to project the trend in global pet food market size over the following three years."
        },

        {
          src:
            "assets/Math_modeling/Chinese_Pet_Food_Production_Prediction_GM_VS_SVM.png",

          alt:
            "Comparison of grey-model and support-vector-based forecasts of China's pet food production",

          caption:
            "China's pet food production: comparison of forecasts from a grey model and a support-vector-based model."
        },

        {
          src:
            "assets/Math_modeling/The_independent_variables_affecting_the_development_profile_of_China's_pet_industry_in_2019_2023_cat.png",

          alt:
            "Explanatory variables related to China's pet cat industry between 2019 and 2023",

          caption:
            "Market drivers: explanatory variables used to investigate the development of China's pet cat industry between 2019 and 2023."
        }
      ],

      tags: [
        "Mathematical Modelling",
        "SPSS",
        "Python",
        "SVR & PLS Regression",
        "Grey Forecasting",
        "Statistical Analysis",
      ],

      role:
        "Team leader. I coordinated the project and contributed throughout model development, code implementation and the writing of a 13,255-Chinese-character competition paper.",

      method:
        "Applied normality tests and tailored z-score standardisation to pet population, household penetration, economic, industry, production and export data. Used Pearson and Spearman correlations to examine potential drivers, then developed multivariable regression models using support vector regression (SVR) and partial least squares (PLS). Applied grey forecasting to project global pet food market trends, considering predictive accuracy and robustness.",

      outcome:
        "Awarded First Prize in the International Undergraduate Division of the Asia and Pacific Mathematical Contest in Modeling (APMCM). Produced three-year forecasts of the global pet food market and China's pet food production and exports.",

      reflection:
        "The project required careful selection of statistical and forecasting methods for heterogeneous market data, with attention to both predictive accuracy and model robustness.",

      evidenceUrl:
        "assets/Math_modeling/Capmcm24203506.pdf",

      evidenceLabel:
        "Competition paper (PDF)",

      credit:
        "Figures and paper produced by our APMCM team. Original data sources are documented in the competition paper."
    },
    {
      id: "yolo-world-traffic-safety",
      number: "05",
      category: "Coursework",

      title: "Open-vocabulary Traffic Detection",

      subtitle:
        "APPLICATION OF YOLO-WORLD TO MULTI-OBJECT DETECTION FOR TRAFFIC SAFETY",

      summary:
        "Adapted YOLO-World to traffic-monitoring imagery through model reproduction and domain-specific fine-tuning, exploring vision-language fusion for multi-object detection.",

      // 首页项目封面
      image:
        "assets/Yolo_world/val_img_29400.png",

      imageAlt:
        "Traffic-image detection visualisation from the YOLO-World coursework project",

      // 项目详情中的三张轮播图片
      images: [
        {
          src:
            "assets/Yolo_world/val_img_29400.png",

          alt:
            "YOLO-World traffic detection visualisation, image 29400",

          caption:
            "Traffic detection example 1: a visualisation from the coursework experiments adapting YOLO-World to traffic-monitoring imagery."
        },

        {
          src:
            "assets/Yolo_world/val_img_29500.png",

          alt:
            "YOLO-World traffic detection visualisation, image 29500",

          caption:
            "Traffic detection example 2: an additional image for inspecting multi-object detection behaviour in a traffic scene."
        },

        {
          src:
            "assets/Yolo_world/val_img_29300.png",

          alt:
            "YOLO-World traffic detection visualisation, image 29300",

          caption:
            "Traffic detection example 3: a further qualitative example of the model's predictions on traffic imagery."
        }
      ],

      tags: [
        "Vision",
        "YOLO-World",
        "Open-vocabulary Detection",
        "Vision–Language Fusion",
        "Fine-tuning",
        "Traffic Safety"
      ],

      role:
        "Completed this deep learning coursework project from 23 to 30 June 2025. Reproduced the YOLO-World workflow, studied its architecture, implemented fine-tuning experiments and analysed traffic-scene detection results.",

      method:
        "Studied the CLIP text encoder, Darknet backbone, PAN multi-scale feature fusion and the detection head for bounding-box regression and object embeddings. Configured RepVL-PAN vision-language fusion and conducted staged fine-tuning, adapting the model to a traffic-domain dataset.",

      outcome:
        "In the coursework experiments, the adapted model achieved better multi-object detection performance than a comparably sized YOLOv7 baseline and reached satisfactory convergence within 50 training epochs.",

      reflection:
        "The project explored the transfer of open-vocabulary vision-language detection to traffic safety. Its performance findings relate to the dataset and training settings used in the coursework.",

      evidenceUrl:
        "https://github.com/xueeux/yolo-world-traffic-safety",

      evidenceLabel:
        "View project code on GitHub",

      credit:
        "Based on YOLO-World by Cheng et al. (CVPR 2024). Visualisations from the coursework experiments; add the traffic dataset attribution."
    },
    {
      id: "tinybert-hybrid-distillation",
      number: "06",
      category: "Coursework",

      title: "TinyBERT Distillation & Hybrid Loss",

      subtitle:
        "REPRODUCTION OF MULTI-STAGE TINYBERT DISTILLATION AND EXPLORATION OF A DYNAMIC HYBRID LOSS",

      summary:
        "Reproduced TinyBERT knowledge distillation and explored a dynamically weighted prediction-layer loss combining teacher supervision with ground-truth labels, aiming to improve the stability of accuracy and F1.",

      image:
        "assets/NLP/final_layer_code.png",

      imageAlt:
        "Implementation of the prediction-layer loss in the TinyBERT coursework project",

      images: [
        {
          src:
            "assets/NLP/final_layer_code.png",

          alt:
            "Code for the TinyBERT prediction-layer loss",

          caption:
            "Prediction-layer training: implementation of the loss function combining teacher-consistency supervision and cross-entropy against ground-truth labels."
        },

        {
          src:
            "assets/NLP/middle_layer_loss.png",

          alt:
            "Intermediate-layer distillation loss in the TinyBERT project",

          caption:
            "Intermediate-layer distillation: an illustration of the loss used to transfer internal representations from the teacher to the student model."
        },

        {
          src:
            "assets/NLP/MRPC_Data_augmentation.png",

          alt:
            "MRPC data augmentation in the TinyBERT coursework workflow",

          caption:
            "Data preparation: the MRPC data-augmentation component of the task-specific distillation workflow."
        }
      ],

      tags: [
        "Natural Language Processing",
        "TinyBERT",
        "Knowledge Distillation",
      ],

      role:
        "Completed this natural language processing coursework project from 30 June to 4 July 2025. Reproduced the distillation workflow and investigated changes to the prediction-layer training objective.",

      method:
        "Reproduced multi-stage teacher–student distillation, including intermediate-layer and prediction-layer training. Explored a hybrid classification loss with dynamically adjusted weights for teacher-consistency supervision and ground-truth cross-entropy.",

      outcome:
        "Reproduced a compact TinyBERT student model and explored a modified prediction-layer objective targeting a balance between predictive performance, inference efficiency and the stability of accuracy and F1.",

      reflection:
        "A key question was how to balance knowledge transferred from the teacher with direct supervision from labelled examples. Repeated runs under consistent evaluation settings would help establish whether dynamic weighting improves stability.",

      evidenceUrl:
        "assets/NLP/NLP_report.pdf",

      evidenceLabel:
        "Coursework Report (PDF)",

      credit:
        "Based on TinyBERT by Jiao et al. (Findings of EMNLP 2020) and the upstream implementation. Preserve the original code notices and acknowledge the MRPC dataset and any third-party assets."
    },
  ],
video: {
    file:
      "assets/robotic_coursework_videos/XueTianxin_Coursework1.mp4",

    poster:
      "assets/robotic_coursework_videos/first_page.png",

    title:
      "Robotics and Sustainable Development",

    caption:
      "A coursework video exploring how robotics can contribute to sustainable development, connecting technological applications with the United Nations Sustainable Development Goals.",

    credit:
      "Coursework video prepared by Xue Tianxin. References and third-party materials are acknowledged in the video.",

    // 没有单独制作字幕文件时保持为空
    captionsFile: ""
  },

  credits:
    "This portfolio presents my academic and project work. Third-party images, videos, audio and research materials are credited alongside their use or within the linked coursework. Original template illustrations are retained where indicated."
  };
