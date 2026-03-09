document.addEventListener('DOMContentLoaded', () => {

    // --- Вопросы ---
    const allQuestions = [
        { image: "img/1.jpg", question: "Назовите город в Минской области, где производятся самые большие в мире карьерные самосвалы?", answers: ["Борисов", "Жодино", "Заславль", "Солигорск"], correct: 1 },
        { image: "img/2.webp", question: "В каких городах Беларуси расположены нефтеперерабатывающие заводы?", answers: ["Мозырь и Новополоцк", "Солигорск и Витебск", "Гмель и Бобруйск", "Могилев и Минск"], correct: 0 },
        { image: "img/3.jpg", question: "Благодаря деятельности какого предприятия на территории Минской области появились красно-коричневые горы?", answers: ["Белджили", "МТЗ", "Беларуськалий", "Нафтан"], correct: 2 },
        { image: "img/4.jpg", question: "Какое промышленное предприятие разрабатывает крупнейший гранитный карьер в районе Микашевичей?", answers: ["БелАЗ", "МАЗ", "Гомсельмаш", "Гранит"], correct: 3 },
        { image: "img/5.jpg", question: "Какую продукцию производит Гомельское предприятие «Гомсельмаш»?", answers: ["комбайны", "часы", "конфеты", "модная одежда"], correct: 0 },
        { image: "img/6.jfif", question: "Какое предприятие выпускает белорусские внедорожники?", answers: ["Лада", "Белджили", "Нафтан", "Савушкин продукт"], correct: 1 },
        { image: "img/7.jpg", question: "Какой белорусский завод производит больше всего грузовиков?", answers: ["Спартак", "МАЗ", "МотоВелаЗавод", "БАТЭ"], correct: 1 },
        { image: "img/8.jpg", question: "Какие виды транспортных средств производятся на белорусских предприятиях МАЗ (Минск), «Неман» (Лида) и «БКМ Холдинг» (Минск)?»,?", answers: ["автобусы", "самолеты", "вертолеты", "поезда"], correct: 0 },
        { image: "img/9.jpg", question: "Что производится на минском предприятии «Атлант»?", answers: ["холодильники и стиральные машины", "тракторы и комбайны", "часы и радиоприемники", "обувь и одежда"], correct: 0 },
        { image: "img/10.jpg", question: "Назовите белорусскую компанию, осуществляющую международные пассажирские авиаперевозки?", answers: ["БелАЗ", "Могилевлифтмаш", "Белавиа", "Белджили"], correct: 2 },
        { image: "img/11.jpg", question: "Какая компания производит беспилотный тягач «БЕЛАРУС А3523и»?", answers: ["МТЗ", "Атлант", "Горизонт", "Керамин"], correct: 0 },
        { image: "img/12.jfif", question: "Где находится единственное метро в Беларуси", answers: ["Гомель", "Брест", "Минск", "Витебск"], correct: 2 },
        { image: "img/13.webp", question: "В каком году был введен в эксплуатацию первый энергоблок Белорусской АЭС?", answers: ["1980", "1990", "2000", "2020"], correct: 3 },
        { image: "img/14.jpg", question: "Назовите завод в городе Жлобин, который является одним из крупнейших производителей металлопродукции в СНГ.?", answers: ["МАЗ", "МТЗ", "БМЗ", "БелАЗ"], correct: 2 },
        { image: "img/15.jpg", question: "Эта компания является одним из крупнейших производителей шинной промышленности в СНГ. Назовите её.?", answers: ["Быстрый дом", "БелАЗ", "Белшина", "БКМ Холдинг"], correct: 2 },
        { image: "img/16.jpg", question: "Белорусы каждый год получают в качестве новогодних подарков сладкую продукцию от этих кондитерских предприятий. Назовите их.?", answers: ["«Марс» и «Сникерс»", "«Беларуськалий» и МАЗ»", "«Гомсельмаш» и МТЗ»", "«Коммунарка» и «Спартак»"], correct: 3 },
        { image: "img/17.jpg", question: "Назовите предприятие, которое входит в число лидеров среди стран СНГ по производству молочной продукции?", answers: ["Коммунарка", "Милкивей", "Савушкин продукт", "Интеграл"], correct: 2 },
        { image: "img/18.jpg", question: "Назовите производителя керамики, известного в Беларуси и Восточной Европе?", answers: ["Бабушкина баночка", "Спартак", "БМЗ", "Керамин"], correct: 3 },
        { image: "img/19.jpg", question: "Эта компания входит в восьмерку всемирно известных производителей сельскохозяйственной техники?", answers: ["МТЗ", "МАЗ", "Изделие Савушкина", "Бабушкина баночка"], correct: 0 },
        { image: "img/20.jpg", question: "Назовите один из ведущих центров разработки ИТ и программного обеспечения в Европе?", answers: ["Гефест", "Образование и воспитание", "Парк высоких технологий", "Белтрансгаз"], correct: 2 },
        { image: "img/21.jpg", question: "Назовите единственное в Беларуси и одно из крупнейших в Европе предприятие по производству льняных тканей?", answers: ["Миловица", "Марка", "Алеся", "Оршанский льнокомбинат"], correct: 3 },
        { image: "img/22.jpg", question: "Какой всемирно известный белорусский бренд нижнего белья вы знаете?", answers: ["Белвест", "Шагавита", "Милавита", "Луч"], correct: 2 },
        { image: "img/23.webp", question: "На производстве какой продукции специализируется завод «Луч»?", answers: ["телевизоры", "мобильные телефоны", "часы", "еда"], correct: 2 },
        { image: "img/24.jpg", question: "Как называется борисовский завод, где была создана знаменитая футбольная команда, 15-кратный чемпион Беларуси?", answers: ["Шахтер", "Торпедо", "Динамо", "БАТЭ"], correct: 3 },
        { image: "img/25.png", question: "Какую продукцию производят белорусские предприятия «Витязь» и «Горизонт»?", answers: ["обувь", "самосвалы", "тракторы", "телевизоры"], correct: 3 },
        { image: "img/26.jfif", question: "Эта компания считается одним из лидеров в СНГ по производству электромобилей. Назовите её.?", answers: ["БАТЭ","БКМ Холдинг","Керамин","Радар"], correct: 1 },
        { image: "img/27.jpg", question: "Назовите флагманское предприятие белорусской нефтехимической промышленности?", answers: ["БМЗ","Атлант","Нафтан","Коммунарка"], correct: 2 },
        { image: "img/28.jpg", question: "В каком городе находится один из крупнейших в мире производителей и поставщиков калийных удобрений «Беларуськалий»?", answers: ["Минск","Солигорск","Могилёв","Борисов"], correct: 1 },
        { image: "img/29.jpg", question: "Назовите компанию, которая считается одним из лидеров на рынке продуктов питания Восточной Европы?", answers: ["Санта-Бремар", "Антлант", "Нафтан", "Юстмаш"], correct: 0 },
        { image: "img/30.jpg", question: "В каком городе находится один из крупнейших в стране производителей натуральных молочных продуктов «Бабушкина банка»?", answers: ["Брест","Минск","Могилёв","Москва"], correct: 2 },
 
    ];
    let availableQuestions = [];

    // --- DOM ЭЛЕМЕНТЫ ---
    const gameBoard = document.getElementById('game-board');
    const diceElement = document.getElementById('dice');
    const turnDisplay = document.getElementById('turn-display');
    const statusContainer = document.getElementById('status-container');
    const player1Element = document.getElementById('player1');
    const player2Element = document.getElementById('player2');
    const winnerPopup = document.getElementById('winner-popup');
    const winnerMessage = document.getElementById('winner-message');
    const cellPopup = document.getElementById('cell-popup');
    const cellImage = document.getElementById('cell-image');
    const cellQuestion = document.getElementById('cell-question');
    const cellAnswers = document.getElementById('cell-answers');
    const colorSelectionPopup = document.getElementById('color-selection-popup');
    const player1ColorChoices = document.getElementById('player1-color-choices');
    const player2ColorChoices = document.getElementById('player2-color-choices');
    const startGameBtn = document.getElementById('start-game-btn');
    const restartGameBtn = document.getElementById('restart-game-btn');

    // --- ИГРОВОЕ СОСТОЯНИЕ ---
    const totalSteps = 70;
    let currentPlayer = 1;
    let playerPositions = { 1: 0, 2: 0 };
    let gameActive = false;
    let currentDiceRoll = 0;
    let currentQuestionData = null;

    /**
     * Генерирует массив из n-го количества цветов в формате HSL.
     * @param {number} count - Количество цветов для генерации.
     * @returns {string[]} Массив цветов.
     */
    function generateHslColors(count) {
        const colors = [];
        const saturation = 75;
        const lightness = 60;
        const hueStep = 360 / count;

        for (let i = 0; i < count; i++) {
            const hue = Math.round(i * hueStep);
            colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
        }
        return colors;
    }

    const availableColors = generateHslColors(36);
    let playerColors = { 1: null, 2: null };

    // --- ЛОГИКА ВЫБОРА ЦВЕТА ---
    function createColorSwatches() {
        availableColors.forEach(color => {
            [player1ColorChoices, player2ColorChoices].forEach((container, playerIndex) => {
                const swatch = document.createElement('div');
                swatch.classList.add('color-swatch');
                swatch.style.backgroundColor = color;
                swatch.dataset.color = color;
                swatch.dataset.player = playerIndex + 1;
                swatch.addEventListener('click', selectColor);
                container.appendChild(swatch);
            });
        });
    }

    function selectColor(event) {
        const selectedColor = event.target.dataset.color;
        const playerNum = parseInt(event.target.dataset.player);
        const otherPlayerNum = playerNum === 1 ? 2 : 1;

        if (selectedColor === playerColors[otherPlayerNum]) return;
        
        playerColors[playerNum] = selectedColor;

        const currentPlayerSwatches = document.querySelectorAll(`#player${playerNum}-color-choices .color-swatch`);
        currentPlayerSwatches.forEach(s => {
            s.classList.toggle('selected', s.dataset.color === selectedColor);
        });

        const otherPlayerSwatches = document.querySelectorAll(`#player${otherPlayerNum}-color-choices .color-swatch`);
        otherPlayerSwatches.forEach(s => {
            s.classList.toggle('disabled', s.dataset.color === playerColors[1] || s.dataset.color === playerColors[2]);
        });
        
        if (playerColors[1] && playerColors[2]) {
            startGameBtn.classList.remove('disabled');
            startGameBtn.disabled = false;
        }
    }

    function setupInitialScreen() {
        createColorSwatches();
        startGameBtn.addEventListener('click', () => {
            colorSelectionPopup.style.display = 'none';
            gameActive = true;
            initGame();
        });
        restartGameBtn.addEventListener('click', () => {
            if (confirm('Вы уверены, что хотите начать игру заново?')) {
                location.reload();
            }
        });
    }

    // --- ИНИЦИАЛИЗАЦИЯ ИГРЫ ---
    function initGame() {
        player1Element.style.backgroundColor = playerColors[1];
        player2Element.style.backgroundColor = playerColors[2];
        turnDisplay.style.color = playerColors[1];

        availableQuestions = [...allQuestions].sort(() => 0.5 - Math.random());

        for (let i = 1; i <= totalSteps; i++) {
            const step = document.createElement('div');
            step.classList.add('step');
            if (i % 7 === 0 && i !== totalSteps) step.classList.add('special');
            step.id = `step-${i}`;
            step.textContent = i;
            if (i === 1) step.classList.add('start');
            if (i === totalSteps) step.classList.add('finish');
            gameBoard.appendChild(step);
        }
        updatePlayerPositions();
        updateStatusMessage(`Ход Игрока ${currentPlayer}. Бросайте кубик!`);
    }

    // --- БРОСОК КУБИКА ---
    function rollDice() {
        if (!gameActive || diceElement.classList.contains('disabled')) return;

        currentDiceRoll = Math.floor(Math.random() * 6) + 1;
        diceElement.textContent = currentDiceRoll;
        diceElement.classList.add('disabled');
        
        if (availableQuestions.length > 0) {
            currentQuestionData = availableQuestions.pop(); 
            updateStatusMessage(`Ответьте на вопрос, чтобы сделать ход.`);
            setTimeout(() => showCellPopup(currentQuestionData), 500);
        } else {
            updateStatusMessage(`Вопросы закончились! Просто идем вперед.`);
            movePlayer();
        }
    }

    // --- ПОКАЗ ОКНА С ВОПРОСОМ ---
    function showCellPopup(data) {
        cellImage.src = data.image ? data.image : "";
        cellImage.style.display = data.image ? 'block' : 'none';
        cellQuestion.textContent = data.question;
        cellAnswers.innerHTML = '';
        data.answers.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.classList.add('cell-answer-btn');
            btn.textContent = answer;
            btn.dataset.index = index;
            btn.addEventListener('click', checkCellAnswer);
            cellAnswers.appendChild(btn);
        });
        cellPopup.classList.add('show');
    }
    
    // --- ОСНОВНАЯ ИГРОВАЯ ЛОГИКА ---
    function updatePlayerPositions() {
        [1, 2].forEach(playerNum => {
            const pos = playerPositions[playerNum];
            const playerElement = (playerNum === 1) ? player1Element : player2Element;
            const targetStep = document.getElementById(pos === 0 ? 'step-1' : `step-${pos}`);
            
            if (targetStep) {
                const playerOffset = (playerNum === 1) ? -7 : 7;
                playerElement.style.top = `${targetStep.offsetTop + targetStep.offsetHeight / 2 - playerElement.offsetHeight / 2}px`;
                playerElement.style.left = `${targetStep.offsetLeft + targetStep.offsetWidth / 2 - playerElement.offsetWidth / 2 + playerOffset}px`;
            }
        });
    }
    
    function updateStatusMessage(message) {
        statusContainer.textContent = message;
    }

    function checkCellAnswer(event) {
        if (!gameActive) return;
        const selectedIndex = parseInt(event.target.dataset.index);
        const allBtns = document.querySelectorAll('.cell-answer-btn');
        allBtns.forEach(btn => btn.classList.add('disabled'));
        
        if (selectedIndex === currentQuestionData.correct) {
            event.target.style.backgroundColor = 'var(--primary)';
            event.target.style.color = 'var(--on-primary)';
            updateStatusMessage(`Верно! Перемещаемся на ${currentDiceRoll} клеток.`);
            setTimeout(() => {
                cellPopup.classList.remove('show');
                movePlayer();
            }, 1500);
        } else {
            event.target.style.backgroundColor = 'var(--error)';
            event.target.style.color = 'var(--on-error)';
            allBtns[currentQuestionData.correct].style.backgroundColor = 'var(--primary)';
            allBtns[currentQuestionData.correct].style.color = 'var(--on-primary)';
            updateStatusMessage(`Неверно! Вы остаетесь на месте. Ход переходит.`);
            setTimeout(() => {
                cellPopup.classList.remove('show');
                switchPlayer();
            }, 2000);
        }
    }

    function movePlayer() {
        playerPositions[currentPlayer] += currentDiceRoll;
        if (playerPositions[currentPlayer] >= totalSteps) {
            playerPositions[currentPlayer] = totalSteps;
            updatePlayerPositions();
            endGame();
            return;
        }
        updatePlayerPositions();
        setTimeout(switchPlayer, 800);
    }

    function switchPlayer() {
        if (!gameActive) return;
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        turnDisplay.textContent = `Игрок ${currentPlayer}`;
        turnDisplay.style.color = playerColors[currentPlayer];
        currentDiceRoll = 0;
        currentQuestionData = null;
        diceElement.textContent = '?';
        diceElement.classList.remove('disabled');
        updateStatusMessage(`Ход Игрока ${currentPlayer}. Бросайте кубик!`);
    }

    function endGame() {
        gameActive = false;
        winnerMessage.textContent = `Игрок ${currentPlayer} победил! Поздравляем!`;
        winnerMessage.style.color = playerColors[currentPlayer]; 
        winnerPopup.classList.add('show');
        diceElement.classList.add('disabled');
    }

    diceElement.addEventListener('click', rollDice);
    window.addEventListener('resize', updatePlayerPositions);

    // --- ЗАПУСК НАЧАЛЬНОГО ЭКРАНА ---
    setupInitialScreen();
});