/* ===== WEEK 11 — Linking words and B1 writing ===== */
COURSE.weeks.push({
  n: 11,
  title: 'Связки и письмо B1',
  tag: 'however, despite, whereas · therefore, as a result · so that · e-mail, статья, история',
  goal: 'Связывать мысли связками уровня B1 (контраст, причина и следствие, цель), писать e-mail на ~100 слов по четырём пунктам и статью или историю на ~100 слов — как в Writing B1 Preliminary.',
  days: [
    ['Повторение A2', ['and, but, so, because, although', 'first, then, after that, finally', 'Соединить 10 пар коротких предложений']],
    ['Теория — «дорожные знаки» текста', ['Прочитать раздел «Теория»: связки как указатели поворота', 'Аналогия Фейнмана: GPS-навигатор для читателя', 'Найти 10 связок в статье BBC News']],
    ['Контраст', ['<i>however</i> — в начале предложения, с запятой', '<i>despite / in spite of</i> + существительное или -ing', '<i>although / even though</i> + предложение; <i>whereas</i> — сравнение']],
    ['Причина, следствие, цель', ['<i>because of / due to</i> + существительное', '<i>therefore, as a result, so</i>', '<i>to / in order to + V, so that + предложение</i>']],
    ['E-mail (Writing Part 1)', ['Ответить на все 4 пункта-заметки письма', 'Начало, абзацы, финальная фраза, подпись', 'Написать 2 e-mail по ~100 слов']],
    ['Статья или история (Writing Part 2)', ['Статья: заголовок, вопрос к читателю, мнение, вывод', 'История: обязательно начать с данной первой фразы', 'Написать одну статью и одну историю']],
    ['Тест + Фейнман-урок', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Список пробелов → план недели 12 (экзамен B1 Preliminary)']],
  ],
  progress: ['Контраст', 'Причина и следствие', 'Цель', 'Письмо B1'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Связки — это <strong>указатели для читателя</strong>: они заранее говорят, что будет дальше — противоположная мысль, причина, результат или пример.</p>
    ${ex('The hotel was expensive. However, it was worth every penny.', 'Отель был дорогим. Однако он стоил каждого пенни.')}
    ${ex('Despite the rain, we enjoyed the trip.', 'Несмотря на дождь, поездка нам понравилась.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Текст — это дорога, а связки — <strong>навигатор</strong>: «через 100 метров поворот» (<i>however</i>), «в результате вы приедете…» (<i>as a result</i>). Без навигатора читатель едет вслепую, даже если каждое предложение верно.</p>
    ${note('<strong>Главное грамматическое правило:</strong> после <i>despite / in spite of / because of / due to</i> — существительное или -ing. После <i>although / because / so that</i> — целое предложение с подлежащим и глаголом.')}`,
  forms: `
    <h3>Что идёт после связки</h3>
    ${tbl(['Связка', 'Дальше', 'Пример'], [
      ['although / even though', 'предложение', 'Although it was cold, we swam.'],
      ['despite / in spite of', 'сущ. / -ing', 'Despite <em>the cold</em>, we swam. / Despite <em>being</em> tired, …'],
      ['however', 'новое предложение, запятая', 'It was cold. However, we swam.'],
      ['whereas / while', 'предложение (сравнение)', 'I like tea, whereas my wife prefers coffee.'],
      ['because', 'предложение', 'We stayed in because it was raining.'],
      ['because of / due to', 'сущ.', 'The flight was cancelled due to <em>fog</em>.'],
      ['therefore / as a result', 'новое предложение', 'He was ill. As a result, he missed the exam.'],
      ['to / in order to', 'V', 'I save money <em>to buy</em> a car.'],
      ['so that', 'предложение (часто с can / could)', 'I left early so that I <em>could</em> catch the train.']])}
    <h3>Связки для текста</h3>
    ${tbl(['Задача', 'Связки'], [
      ['добавить', 'also, in addition, what’s more, as well as'],
      ['пример', 'for example, for instance, such as'],
      ['мнение', 'in my opinion, personally, I believe'],
      ['вывод', 'in conclusion, to sum up, all in all']])}`,
  usage: `
    <h3>E-mail (Part 1, ~100 слов)</h3>
    ${ul(['Ответьте на <b>все четыре</b> заметки к письму — это главный критерий.', 'Начало: <i>Hi Alex, Thanks for your email. It was great to hear from you.</i>', 'Абзац на каждую мысль; связки: <i>also, however, because, so</i>.', 'Финал: <i>Let me know what you think. / Can’t wait to see you!</i> + <i>Best wishes / Love</i>, имя.'])}
    <h3>Статья (Part 2, ~100 слов)</h3>
    ${ul(['Заголовок и вопрос к читателю: <i>Have you ever thought about…?</i>', 'Ваше мнение с причинами и примерами', 'Вывод: <i>All in all, I think…</i>'])}
    <h3>История (Part 2, ~100 слов)</h3>
    ${ul(['Начните <b>ровно</b> с данной первой фразы', 'Past Simple, Past Continuous, Past Perfect (неделя 1)', 'Связки времени: <i>at first, suddenly, after a while, in the end</i>', 'Короткая концовка: что почувствовал герой'])}
    ${ex('Jack opened the door and couldn’t believe his eyes. His living room, which had been tidy that morning, was full of balloons.', 'Пример начала истории: данная фраза + Past Perfect + относительное придаточное.')}`,
  compare: `
    ${tbl(['', 'although', 'despite', 'however'], [
      ['Дальше', 'предложение', 'сущ. / -ing', 'новое предложение'],
      ['Пример', 'Although it rained, we went.', 'Despite the rain, we went.', 'It rained. However, we went.'],
      ['Рус.', 'хотя', 'несмотря на', 'однако']])}
    <h3>Because и because of</h3>
    ${ex('The match was cancelled because it was raining.', 'Матч отменили, потому что шёл дождь (предложение).')}
    ${ex('The match was cancelled because of the rain.', 'Матч отменили из-за дождя (существительное).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>Despite it was raining</i> → <i>Although it was raining</i> или <i>Despite the rain</i>. <i>Although…, but…</i> → только одна связка. <i>for to buy</i> → <i>to buy</i>.')}`,
  dialog: [
    ['T', 'How’s your writing practice going?', 'Как продвигается практика письма?'],
    ['S', 'Better, thanks. I used to write very short sentences, whereas now I try to link my ideas.', 'Лучше, спасибо. Раньше я писала очень короткие предложения, а теперь стараюсь связывать мысли.'],
    ['T', 'That’s great. What did you write about this week?', 'Отлично. О чём ты писала на этой неделе?'],
    ['S', 'An article about working from home. Although it saves time, it can be lonely.', 'Статью о работе из дома. Хотя это экономит время, бывает одиноко.'],
    ['T', 'Good. And did you answer all four points in your e-mail task?', 'Хорошо. А в задании с e-mail ты ответила на все четыре пункта?'],
    ['S', 'I forgot one, so I lost marks. However, my teacher liked my linking words.', 'Один забыла, поэтому потеряла баллы. Однако учителю понравились мои связки.'],
    ['T', 'Next time, tick each point so that you don’t miss anything.', 'В следующий раз отмечай каждый пункт галочкой, чтобы ничего не пропустить.'],
    ['S', 'Good idea! Despite my mistakes, I feel much more confident now.', 'Хорошая идея! Несмотря на ошибки, теперь я чувствую себя гораздо увереннее.'],
  ],
  test: [
    { q: '___ the rain, we enjoyed the trip.', o: ['Although', 'However', 'Despite', 'Because'], a: 2, c: 0, e: 'Перед существительным (the rain) → despite.' },
    { q: '___ it was cold, we went swimming.', o: ['Despite', 'Although', 'In spite of', 'However'], a: 1, c: 0, e: 'Перед предложением → although.' },
    { q: 'The hotel was expensive. ___, it was worth it.', o: ['However', 'Although', 'Despite', 'Whereas'], a: 0, c: 0, e: 'Новое предложение, контраст → However, …' },
    { q: 'I like tea, ___ my wife prefers coffee.', o: ['despite', 'therefore', 'because of', 'whereas'], a: 3, c: 0, e: 'Сравнение двух фактов → whereas.' },
    { q: 'The flight was cancelled ___ fog.', o: ['because', 'due to', 'so that', 'although'], a: 1, c: 1, e: 'Перед существительным → due to / because of.' },
    { q: 'He didn’t study. ___, he failed the exam.', o: ['As a result', 'Despite', 'Although', 'In order to'], a: 0, c: 1, e: 'Следствие → As a result / Therefore.' },
    { q: 'I left early ___ I could catch the train.', o: ['in order to', 'for', 'so that', 'because of'], a: 2, c: 2, e: 'Цель + предложение с could → so that.' },
    { q: 'I’m saving money ___ a new car.', o: ['for buy', 'so that buy', 'for to buy', 'to buy'], a: 3, c: 2, e: 'Цель + V → to / in order to.' },
    { q: 'In the B1 e-mail (Part 1), it is most important to…', o: ['write 250 words', 'answer all four points', 'use only short sentences', 'write about a different topic'], a: 1, c: 3, e: 'Главный критерий — ответить на все четыре пункта.' },
    { q: 'In the story (Part 2), you must…', o: ['start with the sentence you are given', 'write a title only', 'write in the future tense', 'write a list'], a: 0, c: 3, e: 'История начинается с данной первой фразы.' },
  ],
  feynman: {
    task: 'Объясните связки как «навигатор для читателя» и разницу although / despite / however так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>Despite it was raining</i> — ошибка?', 'Чем because отличается от because of?', 'Как сказать «чтобы» двумя способами?', 'Что обязательно должно быть в e-mail, статье и истории B1?'],
  },
});
