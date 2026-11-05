/* ===== WEEK 9 — used to / be used to, verb patterns B1 ===== */
COURSE.weeks.push({
  n: 9,
  title: 'Used to, be used to и глагольные модели',
  tag: 'used to / would · be / get used to · stop doing / stop to do · make / let / want sb to',
  goal: 'Различать used to (раньше было), be used to (привык) и get used to (привыкаю), рассказывать о прошлых привычках через would. Понимать глаголы, которые меняют смысл с -ing и to (remember, forget, stop, try), и модели make / let / want somebody to.',
  days: [
    ['Повторение A2', ['used to + V: прошлые привычки', 'enjoy -ing, want to, предлог + -ing', 'Рассказать о 5 своих детских привычках']],
    ['Теория — три «used»', ['Прочитать раздел «Теория»: used to / be used to / get used to', 'Аналогия Фейнмана: старые фото, удобные ботинки и новые ботинки', 'Написать: к чему вы привыкли в новой стране / на новой работе']],
    ['Would для прошлых привычек', ['<i>Every summer we would go to the seaside.</i>', 'would — только действия, не состояния: <i>I used to have long hair</i>', 'Написать воспоминание (6 предложений) с would и used to']],
    ['Глаголы со сменой смысла', ['<i>remember / forget doing</i> (было) vs <i>to do</i> (не забыть сделать)', '<i>stop doing</i> (бросить) vs <i>stop to do</i> (остановиться, чтобы)', '<i>try doing</i> (попробовать как способ) vs <i>try to do</i> (стараться)']],
    ['Make, let, want sb to', ['<i>make / let + кого + V</i> (без to)', '<i>want / ask / expect + кого + to + V</i>', 'Рассказать о правилах в вашей семье в детстве']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать статью (~100 слов): <i>How my life has changed</i>']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: три «used» и четыре «хитрых» глагола', 'Карточки: 10 моделей с примерами', 'Список пробелов → план недели 10 (фразовые глаголы)']],
  ],
  progress: ['Used to / would', 'Be / get used to', 'Глаголы со сменой смысла', 'Make / let / want sb to'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p><strong>used to + V</strong> — раньше было, теперь нет. <strong>be used to + -ing</strong> — я привык, мне это нормально. <strong>get used to + -ing</strong> — я привыкаю, процесс.</p>
    ${ex('I used to live in Moscow.', 'Раньше я жил в Москве (сейчас нет).')}
    ${ex('I’m used to living in London.', 'Я привык жить в Лондоне (мне это уже нормально).')}
    ${ex('I’m getting used to driving on the left.', 'Я привыкаю ездить по левой стороне.')}
    <h3>Аналогия Фейнмана</h3>
    <p><i>used to</i> — <strong>старые фотографии</strong>: так было когда-то. <i>be used to</i> — <strong>разношенные ботинки</strong>: удобно, привычно. <i>get used to</i> — <strong>новые ботинки</strong>: пока жмут, но вы их разнашиваете.</p>
    ${note('<strong>Главное отличие:</strong> в <i>be / get used to</i> слово <i>to</i> — предлог, поэтому дальше -ing или существительное: <i>I’m used to <em>getting up</em> early. I’m used to <em>the cold</em>.</i>')}`,
  forms: `
    <h3>Три «used»</h3>
    ${tbl(['Форма', 'Дальше', 'Пример', 'Рус.'], [
      ['used to', 'V', 'I used to smoke.', 'Раньше я курил.'],
      ['be used to', '-ing / сущ.', 'She’s used to working nights.', 'Она привыкла работать по ночам.'],
      ['get used to', '-ing / сущ.', 'You’ll get used to the weather.', 'Ты привыкнешь к погоде.'],
      ['would', 'V (только действия)', 'We would play outside for hours.', 'Мы, бывало, часами играли на улице.']])}
    <h3>Глаголы со сменой смысла</h3>
    ${tbl(['Глагол', '+ -ing', '+ to + V'], [
      ['remember', 'помнить, что делал: <i>I remember meeting her.</i>', 'не забыть сделать: <i>Remember to lock the door.</i>'],
      ['forget', 'забыть, что делал: <i>I’ll never forget seeing the sea.</i>', 'забыть сделать: <i>I forgot to call him.</i>'],
      ['stop', 'бросить: <i>He stopped smoking.</i>', 'остановиться, чтобы: <i>He stopped to smoke.</i>'],
      ['try', 'попробовать как способ: <i>Try turning it off and on.</i>', 'стараться: <i>I tried to open it, but couldn’t.</i>']])}`,
  usage: `
    <h3>Make, let, want somebody to</h3>
    ${tbl(['Глагол', 'Схема', 'Пример'], [
      ['make', 'make + кого + V', 'My parents made me <em>do</em> my homework.'],
      ['let', 'let + кого + V', 'They let us <em>stay</em> up late.'],
      ['want', 'want + кого + to + V', 'I want you <em>to help</em> me.'],
      ['ask / tell', '+ кого + to + V', 'She asked me <em>to wait</em>.'],
      ['allow', 'allow + кого + to + V', 'We aren’t allowed <em>to park</em> here.']])}
    ${note('<strong>Ловушка:</strong> по-русски «я хочу, чтобы ты пришёл» — придаточное. По-английски <i>I want you to come</i>, а не <i>I want that you come</i>.')}
    <h3>Would или used to</h3>
    ${ex('When I was a child, I used to have a dog.', 'В детстве у меня была собака (состояние → только used to).')}
    ${ex('Every evening we would walk him in the park.', 'Каждый вечер мы гуляли с ним в парке (повторяющееся действие → would или used to).')}`,
  compare: `
    ${tbl(['', 'used to', 'be used to', 'get used to'], [
      ['Смысл', 'раньше, теперь нет', 'привык', 'привыкаю'],
      ['Дальше', 'V', '-ing / сущ.', '-ing / сущ.'],
      ['Время', 'только прошлое', 'любое', 'любое'],
      ['Пример', 'I used to work nights.', 'I’m used to working nights.', 'I’m getting used to working nights.']])}
    <h3>Stop doing и stop to do</h3>
    ${ex('I stopped drinking coffee.', 'Я бросил пить кофе.')}
    ${ex('I stopped to drink a coffee.', 'Я остановился, чтобы выпить кофе.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>I’m used to get up early</i> → <i>I’m used to <em>getting</em> up</i>. <i>I want that you help me</i> → <i>I want you to help me</i>. <i>They made me to wait</i> → <i>made me wait</i>.')}`,
  dialog: [
    ['J', 'How are you finding life in Edinburgh?', 'Как тебе жизнь в Эдинбурге?'],
    ['A', 'I love it, but I’m still getting used to the weather.', 'Мне нравится, но я ещё привыкаю к погоде.'],
    ['J', 'Isn’t it colder in Russia?', 'Разве в России не холоднее?'],
    ['A', 'Yes, but I’m used to dry cold, not rain every day! I used to live in Novosibirsk.', 'Да, но я привык к сухому холоду, а не к дождю каждый день! Я раньше жил в Новосибирске.'],
    ['J', 'Do you miss it?', 'Скучаешь?'],
    ['A', 'Sometimes. In winter we would go skiing every weekend. I remember skiing with my dad in the forest.', 'Иногда. Зимой мы каждые выходные ездили кататься на лыжах. Помню, как катался с папой в лесу.'],
    ['J', 'That sounds lovely. Have you tried skiing here?', 'Звучит чудесно. Ты пробовал кататься здесь?'],
    ['A', 'Not yet. Remind me to look for a ski club. My boss wants me to join the office team anyway!', 'Пока нет. Напомни мне поискать лыжный клуб. Тем более начальник хочет, чтобы я вступил в команду офиса!'],
  ],
  test: [
    { q: 'I ___ live in a village, but now I live in London.', o: ['am used to', 'get used to', 'used to', 'was used to'], a: 2, c: 0, e: 'Раньше было, теперь нет → used to + V.' },
    { q: 'I’m used to ___ up early.', o: ['get', 'got', 'to get', 'getting'], a: 3, c: 1, e: 'be used to + -ing (to — предлог).' },
    { q: 'Don’t worry, you’ll soon ___ the climate.', o: ['get used to', 'used to', 'use to', 'be use to'], a: 0, c: 1, e: 'Процесс привыкания → get used to + сущ.' },
    { q: 'When I was a child, I ___ a dog called Rex. (состояние)', o: ['would have', 'used to have', 'was used to have', 'would having'], a: 1, c: 0, e: 'Состояние (have) → только used to, не would.' },
    { q: 'Remember ___ the door when you leave.', o: ['locking', 'lock', 'to lock', 'locked'], a: 2, c: 2, e: 'Не забыть сделать → remember to + V.' },
    { q: 'I’ll never forget ___ the sea for the first time.', o: ['to see', 'see', 'seen', 'seeing'], a: 3, c: 2, e: 'Помнить то, что было → forget + -ing.' },
    { q: 'He stopped ___. He hasn’t had a cigarette for a year.', o: ['smoking', 'to smoke', 'smoke', 'smoked'], a: 0, c: 2, e: 'Бросить → stop + -ing.' },
    { q: 'My parents made me ___ my room every Saturday.', o: ['to clean', 'cleaning', 'clean', 'cleaned'], a: 2, c: 3, e: 'make + кого + V (без to).' },
    { q: 'I want ___ me with this box.', o: ['that you help', 'you to help', 'you help', 'you helping'], a: 1, c: 3, e: 'want + кого + to + V.' },
    { q: 'We aren’t allowed ___ in the library.', o: ['eat', 'eating', 'to eating', 'to eat'], a: 3, c: 3, e: 'be allowed + to + V.' },
  ],
  feynman: {
    task: 'Объясните три «used» («старые фото», «разношенные ботинки», «новые ботинки») так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>I’m used to get up</i> — ошибка?', 'Чем <i>stop smoking</i> отличается от <i>stop to smoke</i>?', 'Когда вместо used to можно сказать would?', 'Расскажите о трёх правилах детства через make / let / want sb to.'],
  },
});
