// Gini impurity data for each node
const nodeData = {
    'root': {
        name: 'Root Node',
        condition: 'Petal Length ≤ 2.45?',
        samples: 150,
        classes: { 'Setosa': 50, 'Versicolor': 50, 'Virginica': 50 },
        gini: 0.667,
        calculation: {
            explanation: 'Gini impurity measures how "mixed" the classes are in a node. Lower values indicate purer nodes.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 150 (50 Setosa + 50 Versicolor + 50 Virginica)',
                'Probability of Setosa (p₁) = 50/150 = 0.333',
                'Probability of Versicolor (p₂) = 50/150 = 0.333', 
                'Probability of Virginica (p₃) = 50/150 = 0.333',
                'Gini = 1 - (0.333² + 0.333² + 0.333²)',
                'Gini = 1 - (0.111 + 0.111 + 0.111)',
                'Gini = 1 - 0.333 = 0.667'
            ]
        }
    },
    'setosa-leaf': {
        name: 'Setosa Leaf',
        condition: 'Petal Length ≤ 2.45',
        samples: 50,
        classes: { 'Setosa': 50, 'Versicolor': 0, 'Virginica': 0 },
        gini: 0.0,
        calculation: {
            explanation: 'This is a pure leaf node containing only one class.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 50 (all Setosa)',
                'Probability of Setosa (p₁) = 50/50 = 1.0',
                'Probability of Versicolor (p₂) = 0/50 = 0.0',
                'Probability of Virginica (p₃) = 0/50 = 0.0',
                'Gini = 1 - (1.0² + 0.0² + 0.0²)',
                'Gini = 1 - (1.0 + 0.0 + 0.0)',
                'Gini = 1 - 1.0 = 0.0'
            ]
        }
    },
    'petal-width-decision': {
        name: 'Petal Width Decision',
        condition: 'Petal Width ≤ 1.75?',
        samples: 100,
        classes: { 'Setosa': 0, 'Versicolor': 50, 'Virginica': 50 },
        gini: 0.5,
        calculation: {
            explanation: 'After splitting on petal length, we have equal numbers of two classes.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 100 (0 Setosa + 50 Versicolor + 50 Virginica)',
                'Probability of Setosa (p₁) = 0/100 = 0.0',
                'Probability of Versicolor (p₂) = 50/100 = 0.5',
                'Probability of Virginica (p₃) = 50/100 = 0.5',
                'Gini = 1 - (0.0² + 0.5² + 0.5²)',
                'Gini = 1 - (0.0 + 0.25 + 0.25)',
                'Gini = 1 - 0.5 = 0.5'
            ]
        }
    },
    'petal-length-decision': {
        name: 'Petal Length Decision',
        condition: 'Petal Length ≤ 4.95?',
        samples: 54,
        classes: { 'Setosa': 0, 'Versicolor': 49, 'Virginica': 5 },
        gini: 0.168,
        calculation: {
            explanation: 'This node is mostly Versicolor with a few Virginica samples.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 54 (0 Setosa + 49 Versicolor + 5 Virginica)',
                'Probability of Setosa (p₁) = 0/54 = 0.0',
                'Probability of Versicolor (p₂) = 49/54 = 0.907',
                'Probability of Virginica (p₃) = 5/54 = 0.093',
                'Gini = 1 - (0.0² + 0.907² + 0.093²)',
                'Gini = 1 - (0.0 + 0.823 + 0.009)',
                'Gini = 1 - 0.832 = 0.168'
            ]
        }
    },
    'versicolor-leaf': {
        name: 'Versicolor Leaf',
        condition: 'Petal Length ≤ 4.95 AND Petal Width ≤ 1.75',
        samples: 48,
        classes: { 'Setosa': 0, 'Versicolor': 47, 'Virginica': 1 },
        gini: 0.043,
        calculation: {
            explanation: 'Nearly pure Versicolor node with one misclassified Virginica.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 48 (0 Setosa + 47 Versicolor + 1 Virginica)',
                'Probability of Setosa (p₁) = 0/48 = 0.0',
                'Probability of Versicolor (p₂) = 47/48 = 0.979',
                'Probability of Virginica (p₃) = 1/48 = 0.021',
                'Gini = 1 - (0.0² + 0.979² + 0.021²)',
                'Gini = 1 - (0.0 + 0.958 + 0.0004)',
                'Gini = 1 - 0.958 = 0.042'
            ]
        }
    },
    'virginica-leaf-1': {
        name: 'Virginica Leaf (Small)',
        condition: 'Petal Length > 4.95 AND Petal Width ≤ 1.75',
        samples: 6,
        classes: { 'Setosa': 0, 'Versicolor': 2, 'Virginica': 4 },
        gini: 0.444,
        calculation: {
            explanation: 'Mixed leaf with mostly Virginica but some Versicolor samples.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 6 (0 Setosa + 2 Versicolor + 4 Virginica)',
                'Probability of Setosa (p₁) = 0/6 = 0.0',
                'Probability of Versicolor (p₂) = 2/6 = 0.333',
                'Probability of Virginica (p₃) = 4/6 = 0.667',
                'Gini = 1 - (0.0² + 0.333² + 0.667²)',
                'Gini = 1 - (0.0 + 0.111 + 0.444)',
                'Gini = 1 - 0.555 = 0.445'
            ]
        }
    },
    'virginica-leaf-2': {
        name: 'Virginica Leaf (Large)',
        condition: 'Petal Width > 1.75',
        samples: 46,
        classes: { 'Setosa': 0, 'Versicolor': 1, 'Virginica': 45 },
        gini: 0.043,
        calculation: {
            explanation: 'Nearly pure Virginica node with one misclassified Versicolor.',
            formula: 'Gini = 1 - Σ(pi)²',
            steps: [
                'Total samples: 46 (0 Setosa + 1 Versicolor + 45 Virginica)',
                'Probability of Setosa (p₁) = 0/46 = 0.0',
                'Probability of Versicolor (p₂) = 1/46 = 0.022',
                'Probability of Virginica (p₃) = 45/46 = 0.978',
                'Gini = 1 - (0.0² + 0.022² + 0.978²)',
                'Gini = 1 - (0.0 + 0.0005 + 0.956)',
                'Gini = 1 - 0.957 = 0.043'
            ]
        }
    }
};

// Modal functionality - now updates the info panel
function showGiniDetails(nodeId) {
    const data = nodeData[nodeId];
    if (!data) return;
    
    const panelContent = document.getElementById('panelContent');
    
    // Remove selected class from all nodes
    document.querySelectorAll('.tree-node.bubble').forEach(node => {
        node.classList.remove('selected');
    });
    
    // Add selected class to clicked node
    event.target.closest('.tree-node.bubble').classList.add('selected');
    
    panelContent.innerHTML = `
        <div class="node-info">
            <h3>${data.name}</h3>
            <p><strong>Condition:</strong> ${data.condition}</p>
            <p><strong>Total Samples:</strong> ${data.samples}</p>
            <p><strong>Gini Impurity:</strong> ${data.gini.toFixed(3)}</p>
        </div>
        
        <div class="class-distribution">
            <h3>Class Distribution</h3>
            <div class="distribution-bars">
                ${Object.entries(data.classes).map(([className, count]) => {
                    const percentage = (count / data.samples * 100).toFixed(1);
                    const color = getClassColor(className);
                    return `
                        <div class="distribution-item">
                            <span class="class-name">${getClassEmoji(className)} ${className}:</span>
                            <div class="bar-container">
                                <div class="bar" style="width: ${percentage}%; background: ${color}"></div>
                                <span class="bar-label">${count} (${percentage}%)</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <div class="gini-calculation">
            <h3>Gini Impurity Calculation</h3>
            <p class="explanation">${data.calculation.explanation}</p>
            
            <div class="formula">
                <strong>Formula:</strong> ${data.calculation.formula}
                <br><small>where pi is the probability of class i</small>
            </div>
            
            <div class="calculation-steps">
                <h4>Step-by-step calculation:</h4>
                <ol>
                    ${data.calculation.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="final-result">
                <strong>Final Gini Impurity: ${data.gini.toFixed(3)}</strong>
                <div class="gini-interpretation">
                    ${getGiniInterpretation(data.gini)}
                </div>
            </div>
        </div>
    `;
    
    // Smooth scroll to top of panel content
    panelContent.scrollTop = 0;
}

function closeModal() {
    // This function is no longer needed but kept for compatibility
}

function getClassColor(className) {
    const colors = {
        'Setosa': '#48bb78',
        'Versicolor': '#ed8936',
        'Virginica': '#e53e3e'
    };
    return colors[className] || '#718096';
}

function getClassEmoji(className) {
    const emojis = {
        'Setosa': '🌸',
        'Versicolor': '🌺',
        'Virginica': '🌷'
    };
    return emojis[className] || '🌼';
}

function getGiniInterpretation(gini) {
    if (gini === 0) {
        return '🎯 Perfect purity! All samples belong to the same class.';
    } else if (gini < 0.1) {
        return '✨ Very pure node with minimal class mixing.';
    } else if (gini < 0.3) {
        return '👍 Relatively pure node with some class mixing.';
    } else if (gini < 0.6) {
        return '⚖️ Moderately mixed classes.';
    } else {
        return '🌀 High impurity - classes are well mixed.';
    }
}

// Remove the window.onclick modal close functionality since we're not using modals

// Add click event listeners to all nodes when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to all tree nodes
    const nodes = document.querySelectorAll('.tree-node.bubble');
    nodes.forEach((node, index) => {
        const nodeIds = ['root', 'setosa-leaf', 'petal-width-decision', 'petal-length-decision', 'virginica-leaf-2', 'versicolor-leaf', 'virginica-leaf-1'];
        node.addEventListener('click', () => showGiniDetails(nodeIds[index]));
        node.style.cursor = 'pointer';
        
        // Add visual indication that nodes are clickable
        node.title = 'Click to see Gini impurity calculation';
    });
});
