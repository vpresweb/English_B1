/* ===== WEEK 2 — Present Perfect Continuous ===== */
COURSE.weeks.push({
  n: 2,
  title: 'Present Perfect Continuous',
  tag: 'have been + -ing · процесс до сих пор · How long…? · Simple или Continuous',
  goal: 'Говорить о действиях, которые начались в прошлом и продолжаются до сих пор или только что закончились и оставили видимый след. Выбирать между Present Perfect Simple (результат, сколько) и Continuous (процесс, как долго).',
  days: [
    ['Теория — «процесс до сих пор»', ['Прочитать раздел «Теория»: длинная линия до «сейчас»', 'Аналогия Фейнмана: таймер, который ещё тикает', 'Ответить на 5 вопросов «How long have you been…?»']],
    ['Формы', ['have / has been + -ing', 'Сокращения <i>I’ve been, she’s been</i>; вопрос <i>Have you been…?</i>', 'Составить 8 предложений о том, что вы делаете «уже давно»']],
    ['Видимый след', ['<i>You’re wet! Have you been swimming?</i>', 'Действие только что закончилось, результат виден', 'Придумать 5 «улик» и объяснить их: <i>Her eyes are red. She’s been crying.</i>']],
    ['Simple или Continuous', ['Сколько (результат) → Simple: <i>I’ve written three emails.</i>', 'Как долго (процесс) → Continuous: <i>I’ve been writing emails all morning.</i>', 'Глаголы состояния — только Simple: <i>I’ve known her for years.</i>']],
    ['Диалог и аудирование', ['Разыграть диалог «You look exhausted!» — обе роли', 'Послушать интервью и выписать вопросы How long…?', 'Записать голосовое: что вы делали всю эту неделю']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать e-mail (~100 слов) другу: чем вы были заняты в последнее время', 'Проверить: для know, like, have (иметь) — только Simple']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: Simple или Continuous «как ребёнку»', 'Две картинки: «сколько сделал» и «сколько времени делаю»', 'Список пробелов → план недели 3 (будущие времена)']],
  ],
  progress: ['Формы have been + -ing', 'Процесс до сих пор', 'Видимый след', 'Simple или Continuous'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Present Perfect Continuous — это <strong>процесс, который тянется из прошлого до сих пор</strong> (или только что закончился). Важна длительность и сам процесс, а не результат.</p>
    ${tl([['9 am', 'начал'], ['I’ve been working for 5 hours', 'и всё ещё работаю', 1]])}
    ${ex('I’ve been working since nine o’clock.', 'Я работаю с девяти часов (и до сих пор).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте <strong>таймер</strong>, который вы запустили в прошлом. Он всё ещё тикает — Present Perfect Continuous: <i>I’ve been waiting for 20 minutes!</i> Если же вы смотрите на <strong>готовый результат</strong> — сколько сделано, — это Present Perfect Simple: <i>I’ve read 50 pages.</i></p>
    ${note('<strong>Русская ловушка:</strong> «Я жду тебя уже 20 минут» — по-русски настоящее время. По-английски нельзя <i>I wait</i> или <i>I am waiting for 20 minutes</i>: нужно <i>I’ve been waiting for 20 minutes.</i>')}
    <h3>Две главные ситуации</h3>
    ${ul(['<b>Процесс до сих пор</b>: <i>She’s been learning English for two years.</i>', '<b>Только что закончилось, виден след</b>: <i>The ground is wet. It’s been raining.</i>'])}`,
  forms: `
    <h3>have / has been + -ing</h3>
    ${tbl(['', 'I / you / we / they', 'he / she / it'], [
      ['+', 'I’ve been waiting.', 'She’s been waiting.'],
      ['−', 'I <em>haven’t been</em> sleeping well.', 'He <em>hasn’t been</em> working.'],
      ['?', '<em>Have</em> you <em>been</em> crying?', '<em>Has</em> it <em>been</em> raining?']])}
    <h3>How long…?</h3>
    ${tbl(['Вопрос', 'Ответ'], [
      ['How long have you been learning English?', 'For three years. / Since 2022.'],
      ['How long has she been living here?', 'Since she was a child.'],
      ['How long have they been waiting?', 'For about an hour.']])}
    <h3>Глаголы состояния — без Continuous</h3>
    ${tbl(['Группа', 'Глаголы', 'Пример'], [
      ['знание', 'know, understand, believe', 'I’ve <em>known</em> him for ten years.'],
      ['чувства', 'like, love, hate, want', 'She’s <em>wanted</em> a dog since she was five.'],
      ['обладание', 'have (иметь), own, belong', 'We’ve <em>had</em> this car since 2018.']])}`,
  usage: `
    <h3>Видимый след</h3>
    ${ex('Why are you so out of breath? — I’ve been running.', 'Почему ты так запыхался? — Я бегал.')}
    ${ex('Your hands are dirty. Have you been gardening?', 'У тебя руки грязные. Ты работал в саду?')}
    <h3>Сколько или как долго</h3>
    ${ex('I’ve been reading this book all week.', 'Я читаю эту книгу всю неделю (процесс).')}
    ${ex('I’ve read 200 pages.', 'Я прочитал 200 страниц (результат, количество).')}
    <h3>Типичные маркеры</h3>
    ${ul(['<i>for, since, all day, all morning, lately, recently</i>', '<i>How long…?</i> — почти всегда с Continuous, если глагол действия', '<i>How many / how much…?</i> — с Simple: <i>How many cups have you drunk?</i>'])}`,
  compare: `
    ${tbl(['', 'Present Perfect Simple', 'Present Perfect Continuous'], [
      ['Фокус', 'результат, количество', 'процесс, длительность'],
      ['Пример', 'I’ve painted two rooms.', 'I’ve been painting all day.'],
      ['Вопрос', 'How many…? / Have you finished?', 'How long…?'],
      ['Глаголы состояния', 'да: I’ve known', 'нет: <i>I’ve been knowing</i>']])}
    <h3>Одна ситуация — две оптики</h3>
    ${ex('She’s been writing her novel for two years.', 'Она пишет роман два года (ещё пишет).')}
    ${ex('She’s written three novels.', 'Она написала три романа (результат).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> <i>I am living here for five years</i> или <i>I live here since 2020</i>. Действие началось в прошлом и продолжается → <i>I’ve been living here for five years / since 2020.</i>')}`,
  dialog: [
    ['K', 'You look exhausted! What have you been doing?', 'Ты выглядишь измотанным! Чем ты занимался?'],
    ['D', 'I’ve been moving furniture all day. We’re redecorating the living room.', 'Весь день таскал мебель. Мы делаем ремонт в гостиной.'],
    ['K', 'How long have you been working on it?', 'И давно вы им занимаетесь?'],
    ['D', 'Since Saturday. We’ve painted the walls, but we haven’t finished the floor yet.', 'С субботы. Стены покрасили, а пол ещё не закончили.'],
    ['K', 'Is that why you haven’t been answering your phone?', 'Поэтому ты не отвечал на звонки?'],
    ['D', 'Sorry! My hands have been covered in paint. Have you been trying to call me?', 'Прости! У меня руки были в краске. Ты пытался мне дозвониться?'],
    ['K', 'Yes, I’ve called you three times! I’ve got tickets for the concert on Friday.', 'Да, я звонил тебе три раза! У меня билеты на концерт в пятницу.'],
    ['D', 'Brilliant! I’ve been wanting to go out for ages. Count me in!', 'Здорово! Я уже сто лет хочу куда-нибудь выбраться. Я в деле!'],
  ],
  test: [
    { q: 'I ___ for you for twenty minutes!', o: ['wait', 'am waiting', 'have been waiting', 'was waiting'], a: 2, c: 1, e: 'Процесс из прошлого до сих пор → have been + -ing.' },
    { q: 'How long ___ English?', o: ['have you been learning', 'are you learning', 'do you learn', 'did you learn'], a: 0, c: 1, e: 'How long + процесс до сих пор → Present Perfect Continuous.' },
    { q: 'She ___ been sleeping well lately.', o: ['haven’t', 'isn’t', 'didn’t', 'hasn’t'], a: 3, c: 0, e: 'she → hasn’t been + -ing.' },
    { q: 'Your eyes are red. ___ you been crying?', o: ['Did', 'Have', 'Are', 'Were'], a: 1, c: 2, e: 'Вопрос: Have you been + -ing? (виден след).' },
    { q: 'The ground is wet. It ___.', o: ['has been raining', 'rains', 'is raining since', 'had rain'], a: 0, c: 2, e: 'Только что закончилось, след виден → has been raining.' },
    { q: 'I ___ three emails this morning.', o: ['have been writing', 'have written', 'am writing', 'write'], a: 1, c: 3, e: 'Количество (three) → Present Perfect Simple.' },
    { q: 'I ___ him since we were at school.', o: ['have been knowing', 'am knowing', 'know', 'have known'], a: 3, c: 3, e: 'know — глагол состояния → только Simple: have known.' },
    { q: 'We ___ this flat since 2019.', o: ['have been having', 'are having', 'have had', 'had been have'], a: 2, c: 3, e: 'have (иметь) — состояние → have had.' },
    { q: 'He’s out of breath because he ___.', o: ['has been running', 'runs', 'has run a marathon yesterday', 'is run'], a: 0, c: 2, e: 'Видимый след процесса → has been running.' },
    { q: 'Correct form: «They ___ on the project all week.»', o: ['have working', 'has been working', 'have been working', 'been working'], a: 2, c: 0, e: 'They → have been + -ing.' },
  ],
  feynman: {
    task: 'Объясните разницу между <i>I’ve been reading</i> и <i>I’ve read</i> («таймер» и «результат») так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему «я жду 20 минут» по-английски не <i>I am waiting</i>?', 'Какие глаголы не бывают в Continuous и почему?', 'Придумайте 3 «улики» и объясните их через have been + -ing.', 'Когда спрашивают How long, а когда How many?'],
  },
});
