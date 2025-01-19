// Global object to store chart instances
const chartInstances = {};

// Function to initialize charts with dynamic theme support
function initializeCharts() {
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Common Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#fff' : '#2d3748', // Dynamic text color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: isDarkMode ? '#333' : '#f0f4f8', // Dynamic tooltip background
        titleColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic tooltip title color
        bodyColor: isDarkMode ? '#fff' : '#2d3748', // Dynamic tooltip body color
        borderWidth: 1,
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic tooltip border color
      },
    },
    scales: {
      y: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // Dynamic grid color
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#2d3748', // Dynamic tick color
        },
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // Dynamic grid color
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#2d3748', // Dynamic tick color
        },
      },
    },
  };

  // Destroy existing charts if they exist
  Object.values(chartInstances).forEach((chart) => chart.destroy());

  // FNN - Radar Chart
  chartInstances.fnnChart = new Chart(document.getElementById('fnnChart'), {
    type: 'radar',
    data: {
      labels: ['Input Layer', 'Hidden Layer 1', 'Hidden Layer 2', 'Output Layer'],
      datasets: [{
        label: 'FNN Architecture',
        data: [10, 20, 30, 40],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.2)' : 'rgba(49, 130, 206, 0.2)', // Dynamic background color
        pointBackgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic point color
        pointBorderColor: '#fff',
      }],
    },
    options: chartOptions,
  });

  // CNN - Horizontal Bar Chart
  chartInstances.cnnChart = new Chart(document.getElementById('cnnChart'), {
    type: 'bar',
    data: {
      labels: ['Input', 'Conv Layer', 'Pooling', 'Fully Connected', 'Output'],
      datasets: [{
        label: 'Feature Maps',
        data: [32, 64, 128, 256, 512],
        backgroundColor: isDarkMode
          ? ['#64ffda', '#50e6c5', '#3fd1b1', '#2bbd9d', '#1aa88a']
          : ['#3182ce', '#2b6cb0', '#1e4e8c', '#153e75', '#0d2c52'], // Dynamic background colors
      }],
    },
    options: {
      ...chartOptions,
      indexAxis: 'y', // Horizontal bars
      scales: {
        x: chartOptions.scales.y,
        y: chartOptions.scales.x,
      },
    },
  });

  // RNN - Line with Gradients
  chartInstances.rnnChart = new Chart(document.getElementById('rnnChart'), {
    type: 'line',
    data: {
      labels: ['Time Step 1', 'Time Step 2', 'Time Step 3', 'Time Step 4'],
      datasets: [{
        label: 'RNN Hidden States',
        data: [10, 20, 30, 40],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('rnnChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // LSTM - Polar Area Chart
  chartInstances.lstmChart = new Chart(document.getElementById('lstmChart'), {
    type: 'polarArea',
    data: {
      labels: ['Time Step 1', 'Time Step 2', 'Time Step 3', 'Time Step 4'],
      datasets: [{
        label: 'Memory Cell States',
        data: [10, 20, 30, 40],
        backgroundColor: isDarkMode
          ? ['#64ffda', '#50e6c5', '#3fd1b1', '#2bbd9d']
          : ['#3182ce', '#2b6cb0', '#1e4e8c', '#153e75'], // Dynamic background colors
      }],
    },
    options: {
      ...chartOptions,
      scales: {
        r: {
          grid: {
            color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // Dynamic grid color
          },
          angleLines: {
            color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // Dynamic angle lines color
          },
          ticks: {
            color: isDarkMode ? '#fff' : '#2d3748', // Dynamic tick color
          },
        },
      },
    },
  });

  // GRU - Line with Points
  chartInstances.gruChart = new Chart(document.getElementById('gruChart'), {
    type: 'scatter',
    data: {
      labels: ['Time Step 1', 'Time Step 2', 'Time Step 3', 'Time Step 4'],
      datasets: [{
        label: 'GRU Hidden States',
        data: [10, 20, 30, 40],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
        pointStyle: 'rectRot',
        pointRadius: 6,
      }],
    },
    options: chartOptions,
  });

  // Transformer - Stacked Bar Chart
  chartInstances.transformerChart = new Chart(document.getElementById('transformerChart'), {
    type: 'bar',
    data: {
      labels: ['Input', 'Encoder', 'Decoder', 'Output'],
      datasets: [{
        label: 'Attention Heads',
        data: [8, 16, 8, 4],
        backgroundColor: isDarkMode
          ? ['#64ffda', '#50e6c5', '#3fd1b1', '#2bbd9d']
          : ['#3182ce', '#2b6cb0', '#1e4e8c', '#153e75'], // Dynamic background colors
      }],
    },
    options: {
      ...chartOptions,
      scales: {
        x: chartOptions.scales.x,
        y: {
          ...chartOptions.scales.y,
          stacked: true,
        },
      },
    },
  });

  // GAN - Dual Line Chart
  chartInstances.ganChart = new Chart(document.getElementById('ganChart'), {
    type: 'line',
    data: {
      labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4'],
      datasets: [{
        label: 'Generator Loss',
        data: [1.2, 1.1, 1.0, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        tension: 0.4,
        fill: false,
      }, {
        label: 'Discriminator Loss',
        data: [0.8, 0.9, 1.0, 1.1],
        borderColor: isDarkMode ? '#ff6f61' : '#e53e3e', // Dynamic border color
        tension: 0.4,
        fill: false,
      }],
    },
    options: chartOptions,
  });

  // Autoencoder - Area Chart
  chartInstances.autoencoderChart = new Chart(document.getElementById('autoencoderChart'), {
    type: 'line',
    data: {
      labels: ['Input', 'Encoder', 'Latent Space', 'Decoder', 'Output'],
      datasets: [{
        label: 'Reconstruction Loss',
        data: [0.8, 0.5, 0.2, 0.5, 0.8],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('autoencoderChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // U-Net (Feature Maps and Performance Comparison)
  chartInstances.unetChart = new Chart(document.getElementById('unetChart'), {
    type: 'bar',
    data: {
      labels: ['Input', 'Encoder1', 'Encoder2', 'Latent Space', 'Decoder1', 'Decoder2', 'Output'],
      datasets: [
        {
          label: 'Feature Map Sizes',
          data: [256, 128, 64, 32, 64, 128, 256],
          backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
        },
      ],
    },
    options: {
      ...chartOptions,
      scales: {
        x: {
          title: {
            text: 'Components',
            color: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic title color
          },
        },
      },
    },
  });

  // YOLO - Heatmap Simulation
  chartInstances.yoloChart = new Chart(document.getElementById('yoloChart'), {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'YOLO Detection Confidence',
        data: [
          { x: 1, y: 0.8, r: 10 },
          { x: 2, y: 0.9, r: 15 },
          { x: 3, y: 0.85, r: 20 },
          { x: 4, y: 0.7, r: 12 },
        ],
        backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.5)' : 'rgba(49, 130, 206, 0.5)', // Dynamic background color
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
      }],
    },
    options: {
      ...chartOptions,
      scales: {
        x: {
          title: {
            text: 'Detection Layers',
            color: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic title color
          },
        },
        y: {
          title: {
            text: 'Confidence',
            color: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic title color
          },
        },
      },
    },
  });

  // Radial Basis Function Networks (RBFN) Chart
  chartInstances.rbfnChart = new Chart(document.getElementById('rbfnChart'), {
    type: 'line',
    data: {
      labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
      datasets: [{
        label: 'Training Loss',
        data: [0.8, 0.6, 0.4, 0.3, 0.2],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('rbfnChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Self-Organizing Maps (SOM) Chart
  chartInstances.somChart = new Chart(document.getElementById('somChart'), {
    type: 'bar',
    data: {
      labels: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5'],
      datasets: [{
        label: 'Data Points',
        data: [30, 45, 60, 35, 50],
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // Deep Belief Networks (DBN) Chart
  chartInstances.dbnChart = new Chart(document.getElementById('dbnChart'), {
    type: 'radar',
    data: {
      labels: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5'],
      datasets: [{
        label: 'Feature Activation',
        data: [80, 60, 70, 90, 50],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.2)' : 'rgba(49, 130, 206, 0.2)', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // Echo State Networks (ESN) Chart
  chartInstances.esnChart = new Chart(document.getElementById('esnChart'), {
    type: 'line',
    data: {
      labels: ['Time Step 1', 'Time Step 2', 'Time Step 3', 'Time Step 4', 'Time Step 5'],
      datasets: [{
        label: 'Reservoir State',
        data: [0.5, 0.7, 0.6, 0.8, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('esnChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Capsule Networks (CapsNet) Chart
  chartInstances.capsnetChart = new Chart(document.getElementById('capsnetChart'), {
    type: 'doughnut',
    data: {
      labels: ['Capsule 1', 'Capsule 2', 'Capsule 3'],
      datasets: [{
        label: 'Capsule Activation',
        data: [40, 30, 30],
        backgroundColor: isDarkMode
          ? ['#64ffda', '#50e6c5', '#3fd1b1']
          : ['#3182ce', '#2b6cb0', '#1e4e8c'], // Dynamic background colors
      }],
    },
    options: chartOptions,
  });

  // Siamese Networks Chart
  chartInstances.siameseChart = new Chart(document.getElementById('siameseChart'), {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Similarity Scores',
        data: [
          { x: 0.2, y: 0.8 },
          { x: 0.4, y: 0.6 },
          { x: 0.6, y: 0.4 },
          { x: 0.8, y: 0.2 },
        ],
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // Neural Turing Machines (NTM) Chart
  chartInstances.ntmChart = new Chart(document.getElementById('ntmChart'), {
    type: 'line',
    data: {
      labels: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      datasets: [{
        label: 'Memory Usage',
        data: [10, 20, 30, 40, 50],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('ntmChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Variational Autoencoders (VAE) Chart
  chartInstances.vaeChart = new Chart(document.getElementById('vaeChart'), {
    type: 'bar',
    data: {
      labels: ['Latent Dim 1', 'Latent Dim 2', 'Latent Dim 3', 'Latent Dim 4'],
      datasets: [{
        label: 'Latent Space Values',
        data: [0.5, 0.7, 0.3, 0.9],
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // Graph Neural Networks (GNN) Chart
  chartInstances.gnnChart = new Chart(document.getElementById('gnnChart'), {
    type: 'line',
    data: {
      labels: ['Node 1', 'Node 2', 'Node 3', 'Node 4', 'Node 5'],
      datasets: [{
        label: 'Node Embeddings',
        data: [0.1, 0.3, 0.5, 0.7, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('gnnChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Spatial Transformer Networks (STN) Chart
  chartInstances.stnChart = new Chart(document.getElementById('stnChart'), {
    type: 'line',
    data: {
      labels: ['Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5'],
      datasets: [{
        label: 'Transformation Accuracy',
        data: [0.8, 0.85, 0.9, 0.95, 1.0],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('stnChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Neural Ordinary Differential Equations (Neural ODEs) Chart
  chartInstances.neuralOdeChart = new Chart(document.getElementById('neuralOdeChart'), {
    type: 'line',
    data: {
      labels: ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'],
      datasets: [{
        label: 'ODE Solution',
        data: [0.1, 0.3, 0.5, 0.7, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('neuralOdeChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // BERT Chart
  chartInstances.bertChart = new Chart(document.getElementById('bertChart'), {
    type: 'bar',
    data: {
      labels: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5'],
      datasets: [{
        label: 'Attention Weights',
        data: [0.2, 0.4, 0.6, 0.8, 1.0],
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // EfficientNet Chart
  chartInstances.efficientnetChart = new Chart(document.getElementById('efficientnetChart'), {
    type: 'line',
    data: {
      labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
      datasets: [{
        label: 'Validation Accuracy',
        data: [0.6, 0.7, 0.8, 0.85, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('efficientnetChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // DenseNet Chart
  chartInstances.densenetChart = new Chart(document.getElementById('densenetChart'), {
    type: 'line',
    data: {
      labels: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5'],
      datasets: [{
        label: 'Feature Reuse',
        data: [0.5, 0.6, 0.7, 0.8, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('densenetChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // ResNeXt Chart
  chartInstances.resnextChart = new Chart(document.getElementById('resnextChart'), {
    type: 'bar',
    data: {
      labels: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'],
      datasets: [{
        label: 'Grouped Convolutions',
        data: [10, 20, 30, 40, 50],
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // MobileNet Chart
  chartInstances.mobilenetChart = new Chart(document.getElementById('mobilenetChart'), {
    type: 'line',
    data: {
      labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
      datasets: [{
        label: 'Training Loss',
        data: [0.8, 0.6, 0.4, 0.3, 0.2],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('mobilenetChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // ShuffleNet Chart
  chartInstances.shufflenetChart = new Chart(document.getElementById('shufflenetChart'), {
    type: 'line',
    data: {
      labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
      datasets: [{
        label: 'Validation Accuracy',
        data: [0.7, 0.75, 0.8, 0.85, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('shufflenetChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Transformer-XL Chart
  chartInstances.transformerXlChart = new Chart(document.getElementById('transformerXlChart'), {
    type: 'line',
    data: {
      labels: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      datasets: [{
        label: 'Attention Scores',
        data: [0.1, 0.3, 0.5, 0.7, 0.9],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('transformerXlChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // T5 Chart
  chartInstances.t5Chart = new Chart(document.getElementById('t5Chart'), {
    type: 'bar',
    data: {
      labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
      datasets: [{
        label: 'Task Performance',
        data: [0.8, 0.85, 0.9, 0.95, 1.0],
        backgroundColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic background color
      }],
    },
    options: chartOptions,
  });

  // StyleGAN Chart
  chartInstances.styleganChart = new Chart(document.getElementById('styleganChart'), {
    type: 'line',
    data: {
      labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
      datasets: [{
        label: 'Generator Loss',
        data: [1.0, 0.8, 0.6, 0.4, 0.2],
        borderColor: isDarkMode ? '#64ffda' : '#3182ce', // Dynamic border color
        backgroundColor: createGradient('styleganChart', isDarkMode ? '#64ffda' : '#3182ce', isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(49, 130, 206, 0.1)'), // Dynamic gradient
        fill: true,
        tension: 0.4,
      }],
    },
    options: chartOptions,
  });

  // Gradient Helper
  function createGradient(chartId, color1, color2) {
    const ctx = document.getElementById(chartId).getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  }
}

// Call the function to initialize charts
initializeCharts();