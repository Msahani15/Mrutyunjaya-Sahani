/* =========================================================
   Dr. Mrutyunjaya Sahani — Academic Portfolio
   script.js — SPA navigation + publications renderer
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. PUBLICATIONS DATA
     Source: CV Section 9 "Journal Publications" (verbatim,
     reorganized only by year descending). Edit this array to
     add / update publications later.
     --------------------------------------------------------- */
  const PUBLICATIONS = [
    { year: 2026, title: "Startup Strategy-Based Integral Backstepping Sliding Mode Control for MMC-UPQC With PV", authors: "C. Jiang, Mrutyunjaya Sahani, S. Zhang, S. K. Panda", venue: "IEEE Transactions on Industrial Electronics, 2026", meta: "Impact Factor 7.8 · Q1" },
    { year: 2026, title: "Enhanced spatio-temporal fusion network for accurate wind power forecasting", authors: "Zheyong Jiang, Mrutyunjaya Sahani, Qingmei Tan, Jinxing Che, Deqiang Tan, Y. Dong, S. K. Panda", venue: "Computers and Electrical Engineering, vol. 139, p.111356, 2026", meta: "Impact Factor 4.8 · Q1" },
    { year: 2026, title: "Sig-FiLMNet: Dual-Branch Path-Signature Learning with FiLM Fusion for Battery SOH Estimation", authors: "B. Zhu, L. Jia, Mrutyunjaya Sahani, S. K. Panda", venue: "IEEE Transactions on Transportation Electrification, 2026", meta: "Impact Factor 9.3 · Q1" },
    { year: 2026, title: "Leveraging real-time supplement values decomposition and training strategy optimization for accurate wind power forecasting", authors: "Zheyong Jiang, Mrutyunjaya Sahani, S. K. Panda, Qingmei Tan, Jinxing Che, Xiukun Tan", venue: "Engineering Applications of Artificial Intelligence, vol. 163, p.113021, 2026", meta: "Impact Factor 9.0 · Q1" },
    { year: 2026, title: "Online Compensation of Current Measurement Errors in DPCC for SPMSM Drives Using an Error-Type-Specific Adaptive Disturbance Observer", authors: "L. Wang, S. Zhang, Y. Zhong, X. Niu, X. Zhang, Mrutyunjaya Sahani, S. K. Panda", venue: "IEEE Transactions on Transportation Electrification, 2026", meta: "Impact Factor 9.3 · Q1" },

    { year: 2025, title: "Robust broad learning system with parametrized variational mode decomposition for schizophrenia diagnosis", authors: "Sebamai Parija, Mrutyunjaya Sahani, Susanta Kumar Rout", venue: "Engineering Applications of Artificial Intelligence, vol. 158, p.111294, 2025", meta: "Impact Factor 7.5 · Q1" },
    { year: 2025, title: "Leveraging real-time supplement values decomposition and training strategy optimization for accurate wind power forecasting", authors: "Zheyong Jiang, Mrutyunjaya Sahani, S. K. Panda, Qingmei Tan, Jinxing Che, Xiukun Tan", venue: "Engineering Applications of Artificial Intelligence, vol. 163, p.113021, 2025", meta: "Impact Factor 7.5 · Q1" },
    { year: 2025, title: "Design, analysis, and validation of fault-tolerant switched-capacitor based ANPC multilevel inverter topology", authors: "Marif Daula Siddique, Prasanth Sundararajan, Mrutyunjaya Sahani, S. K. Panda", venue: "Electric Power Systems Research, vol. 247, p.111883, 2025", meta: "Impact Factor 4.2 · Q1" },
    { year: 2025, title: "A robust variational mode decomposition based deep random vector functional link network for dynamic system identification", authors: "Rakesh Kumar Pattanaik, Susanta Kumar Rout, Mrutyunjaya Sahani, Mihir Narayan Mohanty", venue: "Computers and Electrical Engineering, vol. 122, p.109887, 2025", meta: "Impact Factor 4.9 · Q1" },
    { year: 2025, title: "Epileptic Seizure Recognition Using Improved Modes Decomposition and Online Sequential Autoencoder Multi-Kernel Broad Learning System", authors: "Bhanja Kishor Swain, Susanta Kumar Rout, Mrutyunjaya Sahani, P. K. Dash, S. K. Panda", venue: "IEEE Sensors Journal, January 2025", meta: "Impact Factor 4.325 · Q1" },
    { year: 2025, title: "A Tight Grid-Forming Control Framework for Grid-Connected Inverters Under Large Grid Frequency Drops With Wide Range of SCR and X/R", authors: "Xitong Niu, Yue Qu, Pengfeng Lin, Chenggang Cui, Mrutyunjaya Sahani, Chuanlin Zhang, S. K. Panda", venue: "IEEE Transactions on Power Electronics, vol. 41, no. 5, pp. 8242–8255, 2025", meta: "Impact Factor 6.7 · Q1" },

    { year: 2024, title: "An Adaptive Integral Backstepping SMC and Robust Functional Expanded Multikernel BLS Based MPPT Control in PV-Battery DC Microgrid System", authors: "Mrutyunjaya Sahani, B. Biswal, E. N. Prasad, P. K. Dash, S. K. Panda", venue: "IEEE Transactions on Power Electronics, vol. 39, no. 3, pp. 2966–2979, March 2024", meta: "Impact Factor 6.7 · Q1" },
    { year: 2024, title: "Precise single step and multistep short-term photovoltaic parameters forecasting based on reduced deep convolutional stack autoencoder and minimum variance multikernel random vector functional network", authors: "Mrutyunjaya Sahani, S. Choudhury, M. D. Siddique, T. Parida, P. K. Dash, S. K. Panda", venue: "Engineering Applications of Artificial Intelligence, vol. 136, p.108935, 2024", meta: "Impact Factor 7.5 · Q1" },
    { year: 2024, title: "Epileptic Seizure Recognition Using Improved Modes Decomposition and Online Sequential Autoencoder Multi-Kernel Broad Learning System", authors: "B. K. Swain, S. K. Rout, Mrutyunjaya Sahani, P. K. Dash, S. K. Panda", venue: "IEEE Sensors Journal, 2024", meta: "Impact Factor 4.325 · Q1" },
    { year: 2024, title: "Machine Learning Aided Sparse Direction of Arrival Estimation", authors: "P. Raiguru, S. K. Rout, Mrutyunjaya Sahani, R. K. Mishra", venue: "IEEE Sensors Journal, September 2024", meta: "Impact Factor 4.325 · Q1" },
    { year: 2024, title: "A robust variational mode decomposition based deep random vector functional link network for dynamic system identification", authors: "R. K. Pattanaik, S. K. Rout, Mrutyunjaya Sahani, M. N. Mohanty", venue: "Computers and Electrical Engineering, vol. 122, p.109887, 2024", meta: "Impact Factor 4.0 · Q1" },
    { year: 2024, title: "Fault-Tolerant Analysis Based Performance Assessment of Single-Phase Multilevel Inverter Topologies with Reduced Switch Count", authors: "M. D. Siddique, P. Sundararajan, Mrutyunjaya Sahani, S. K. Panda", venue: "IEEE Journal of Emerging and Selected Topics in Power Electronics, 2024", meta: "Impact Factor 4.6 · Q1" },
    { year: 2024, title: "RDCSAE-RKRVFLN: An unified deep learning framework for robust and accurate DOA estimation", authors: "P. Raiguru, B. K. Swain, S. K. Rout, Mrutyunjaya Sahani, R. K. Mishra", venue: "Applied Soft Computing, p.111791, May 2024", meta: "Impact Factor 7.2 · Q1" },

    { year: 2023, title: "Autoencoder-based improved deep learning approach for schizophrenic EEG signal classification", authors: "Sebamai Parija, Mrutyunjaya Sahani, Ranjeeta Bisoi, P. K. Dash", venue: "Pattern Analysis and Applications, vol. 26(2), pp. 403–435, 2023", meta: "Impact Factor 3.9 · Q1" },
    { year: 2023, title: "Analysis of Arc Faults and Utility Disturbances in a Multiple Photovoltaic-Based DC Ring Microgrid by Using Improved MFDFA", authors: "Anjaiah Kanche, P. K. Dash, Mrutyunjaya Sahani", venue: "Iranian Journal of Science and Technology — Trans. Electrical Engineering, 2023", meta: "Impact Factor 2.4 · Q1" },
    { year: 2023, title: "Diagnosis of Voltage Dips Using a Novel Morphological Filter and a Smart Deep Learning LSTM-Based Minimum Variance RVFLN Classifier", authors: "L. Priyadarshini, P. K. Dash, Mrutyunjaya Sahani", venue: "Iranian Journal of Science and Technology — Trans. Electrical Engineering, vol. 47(1), pp. 79–101, 2023", meta: "Impact Factor 2.4 · Q1" },

    { year: 2022, title: "FPGA-Based Semisupervised Multifusion RDCNN of Process Robust VMD Data with Online Kernel RVFLN for Power Quality Events Recognition", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "IEEE Transactions on Neural Networks and Learning Systems, 2022", meta: "Impact Factor 10.451 · Q1" },
    { year: 2022, title: "A new adaptive integral back stepping fractional order sliding mode control approach for PV and wind with battery system-based DC microgrid", authors: "E. N. V. D. V. Prasad, Mrutyunjaya Sahani, P. K. Dash", venue: "Sustainable Energy Technologies and Assessments, vol. 52, p.102261, 2022", meta: "Impact Factor 8.0 · Q1" },
    { year: 2022, title: "A new protection scheme for PV-wind based DC-ring microgrid by using modified multifractal detrended fluctuation analysis", authors: "Anjaiah Kanche, P. K. Dash, Mrutyunjaya Sahani", venue: "Protection and Control of Modern Power Systems, vol. 7(1), p.8, 2022", meta: "Impact Factor 11.0 · Q1" },
    { year: 2022, title: "Detection of faults and DG islanding in PV-Wind DC ring bus microgrid by using optimized VMD based improved broad learning system", authors: "Anjaiah Kanche, P. K. Dash, Mrutyunjaya Sahani", venue: "ISA Transactions, vol. 131, pp. 533–551, 2022", meta: "Impact Factor 7.3 · Q1" },
    { year: 2022, title: "Diagnosing utility grid disturbances in photovoltaic integrated DC microgrid using adaptive multiscale morphology with DFA analysis", authors: "Eluri NVDV Prasad, P. K. Dash, Mrutyunjaya Sahani", venue: "Sustainable Energy, Grids and Networks, vol. 29, p.100574, 2022", meta: "Impact Factor 3.182 · Q1" },

    { year: 2021, title: "Epileptic Seizure Recognition Using Reduced Deep Convolutional Stack Autoencoder and Improved Kernel RVFLN from EEG Signals", authors: "Mrutyunjaya Sahani, Susanta Rout, P. K. Dash", venue: "IEEE Transactions on Biomedical Circuits and Systems, 2021 (doi:10.1109/TBCAS.2021.3090995)", meta: "Impact Factor 4.042 · Q1" },
    { year: 2021, title: "FPGA implementation of epileptic seizure detection using semisupervised reduced deep convolutional neural network", authors: "Mrutyunjaya Sahani, Susanta Rout, P. K. Dash", venue: "Applied Soft Computing, vol. 110, p.107639, 2021", meta: "Impact Factor 6.725 · Q1" },
    { year: 2021, title: "FPGA Based Deep Convolutional Neural Network of Process Adaptive VMD Data with Online RVFLN for Power Quality Events Recognition", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "IEEE Transactions on Power Electronics, vol. 36, no. 4, pp. 4006–4015, 2021", meta: "Impact Factor 6.373 · Q1" },
    { year: 2021, title: "Deep Convolutional Stack Autoencoder of Process Adaptive VMD Data with Robust Multikernel RVFLN for Power Quality Events Recognition", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "IEEE Transactions on Instrumentation and Measurement, vol. 70, pp. 1–12, January 2021", meta: "Impact Factor 4.016 · Q1" },
    { year: 2021, title: "Multifuse Multilayer Multikernel RVFLN+ of Process Modes Decomposition and Approximate Entropy Data from iEEG/sEEG Signals for Epileptic Seizure Recognition", authors: "Susanta Rout, Mrutyunjaya Sahani, P. K. Dash, Pradyut Kumar Biswal", venue: "Computers in Biology and Medicine, vol. 132, p.104299, May 2021", meta: "Impact Factor 4.589 · Q1" },
    { year: 2021, title: "A digital direction of arrival estimator based on fast on-line sequential random vector functional link network", authors: "P. Raiguru, Mrutyunjaya Sahani, Susanta Rout, D. C. Panda, R. K. Mishra", venue: "AEU — International Journal of Electronics and Communications, vol. 142, p.153986, 2021", meta: "Impact Factor 3.2 · Q1" },
    { year: 2021, title: "Effective fault distance estimation and diagnosis in the PV based DC-ring network using Hilbert Huang transform and weighted online sequential random vector functional network", authors: "Anjaiah Kanche, P. K. Dash, Mrutyunjaya Sahani", venue: "International Transactions on Electrical Energy Systems, p.104426, 2021", meta: "Impact Factor 2.860 · Q2" },
    { year: 2021, title: "Deep long short-term memory based minimum variance kernel random vector functional link network for epileptic EEG signal classification", authors: "Sebamai Parija, Ranjeeta Bisoi, P. K. Dash, Mrutyunjaya Sahani", venue: "Engineering Applications of Artificial Intelligence, vol. 105, p.104426, 2021", meta: "Impact Factor 6.212 · Q1" },

    { year: 2020, title: "A Real-Time Power Quality Events Recognition Using Variational Mode Decomposition and Online-Sequential Extreme Learning Machine", authors: "Mrutyunjaya Sahani, P. K. Dash, Debashisa Samal", venue: "Measurement, p.107597, February 2020", meta: "Impact Factor 3.927 · Q1" },
    { year: 2020, title: "FPGA-based Favourite Skin Colour Restoration Using Improved Histogram Equalization with Variable Enhancement Degree and Ensemble Extreme Learning Machine", authors: "Mrutyunjaya Sahani, Bhanja Kishor Swain, P. K. Dash", venue: "IET Image Processing, pp. 1–13, 2020", meta: "Impact Factor 1.995 · Q2" },
    { year: 2020, title: "Automatic Power Quality Events Recognition Based on Modes Decomposition and Online P-Norm Adaptive Extreme Learning Machine", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "IEEE Transactions on Industrial Informatics, vol. 16, no. 7, pp. 4355–4364, July 2020", meta: "Impact Factor 10.215 · Q1" },
    { year: 2020, title: "Islanding and power quality disturbance monitoring in microgrid using adaptive cross variational mode decomposition and reduced kernel ridge regression", authors: "P. K. Dash, P. Satapathy, P. Nayak, Mrutyunjaya Sahani", venue: "International Transactions on Electrical Energy Systems, vol. 30, p.6, e12364, 2020", meta: "Impact Factor 2.491 · Q2" },

    { year: 2019, title: "FPGA-Based Online Power Quality Disturbances Monitoring Using Reduced-Sample HHT and Class-Specific Weighted RVFLN", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "IEEE Transactions on Industrial Informatics, vol. 15, no. 8, pp. 4614–4623, January 2019", meta: "Impact Factor 10.215 · Q1" },
    { year: 2019, title: "Fault location Estimation for Series Compensated Double-Circuit Transmission Line Using POVMD and Weighted P-Norm Random Vector Functional Link Network", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "Applied Soft Computing, p.105860, 2019", meta: "Impact Factor 6.725 · Q1" },
    { year: 2019, title: "Fault location Estimation for Series Compensated Double-Circuit Transmission Line Using EWT and Weighted RVFLN", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "Engineering Applications of Artificial Intelligence, vol. 88, p.103336, 2019", meta: "Impact Factor 6.212 · Q1" },

    { year: 2018, title: "Automatic Power Quality Events Recognition Based on Hilbert Huang Transform and Weighted Bidirectional Extreme Learning Machine", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "IEEE Transactions on Industrial Informatics, vol. 14, no. 9, pp. 3849–3858, September 2018", meta: "Impact Factor 10.215 · Q1" },
    { year: 2018, title: "Variational Mode Decomposition and Weighted Online Sequential Extreme Learning Machine for Power Quality Event Patterns Recognition", authors: "Mrutyunjaya Sahani, P. K. Dash", venue: "Neurocomputing, vol. 310, pp. 10–27, October 2018", meta: "Impact Factor 5.719 · Q1" }
  ];

  /* ---------------------------------------------------------
     2. VIEW / NAVIGATION LOGIC
     --------------------------------------------------------- */
  const app = document.getElementById("app");
  const views = document.querySelectorAll(".view");
  const navLinks = document.querySelectorAll("[data-nav]");
  const navToggle = document.getElementById("navToggle");
  const viewport = document.getElementById("viewport");

  function showView(name) {
    let matched = false;
    views.forEach((v) => {
      const isMatch = v.dataset.view === name;
      v.classList.toggle("is-active", isMatch);
      if (isMatch) matched = true;
    });
    if (!matched) {
      // fallback to home if an unknown hash is passed
      document.querySelector('[data-view="home"]').classList.add("is-active");
      name = "home";
    }

    navLinks.forEach((btn) => {
      if (btn.classList.contains("nav-link")) {
        btn.classList.toggle("active", btn.dataset.nav === name);
      }
    });

    app.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    viewport.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    window.scrollTo({ top: 0, behavior: "auto" });

    if (history.replaceState) {
      history.replaceState(null, "", "#" + name);
    }
  }

  navLinks.forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.nav));
  });

  navToggle.addEventListener("click", () => {
    const open = app.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  window.addEventListener("hashchange", () => {
    const name = location.hash.replace("#", "") || "home";
    showView(name);
  });

  // Initial view from URL hash, if present
  const initial = location.hash.replace("#", "");
  if (initial) showView(initial);

  /* ---------------------------------------------------------
     3. PUBLICATIONS RENDERER
     --------------------------------------------------------- */
  function renderPublications() {
    const list = document.getElementById("pubList");
    const countEl = document.getElementById("pubCount");
    if (!list) return;

    const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);
    let html = "";
    let runningIndex = 0;
    const total = PUBLICATIONS.length;

    years.forEach((year) => {
      html += `<h3 class="pub-year">${year}</h3>`;
      PUBLICATIONS.filter((p) => p.year === year).forEach((pub) => {
        runningIndex += 1;
        html += `
          <article class="pub-item">
            <span class="idx">${String(total - runningIndex + 1).padStart(2, "0")}</span>
            <div class="body">
              <div class="pub-title">${pub.title}</div>
              <div class="pub-authors">${highlightSelf(pub.authors)}</div>
              <div class="pub-venue">${pub.venue}</div>
              <div class="pub-meta">${pub.meta}</div>
            </div>
          </article>`;
      });
    });

    list.innerHTML = html;
    countEl.textContent = `${total} journal publications, ${years[years.length - 1]}–${years[0]}`;
  }

  function highlightSelf(authorsStr) {
    return authorsStr.replace(
      /Mrutyunjaya Sahani/g,
      '<span class="me">Mrutyunjaya Sahani</span>'
    );
  }

  renderPublications();

  /* ---------------------------------------------------------
     4. MISC
     --------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
