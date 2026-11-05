/* ===== WEEK 5 — Third conditional, wish / if only ===== */
COURSE.weeks.push({
  n: 5,
  title: 'Third conditional · wish / if only',
  tag: 'If I had known… · I wish I were… · I wish I had… · все типы условий',
  goal: 'Говорить о нереальном прошлом («если бы тогда…»), выражать желания и сожаления через wish и if only, свободно выбирать между zero, first, second и third conditional.',
  days: [
    ['Повторение A2', ['Zero, first и second conditional', '<i>If it rains, I’ll stay. / If I had money, I’d travel.</i>', 'Составить по 3 предложения каждого типа']],
    ['Теория — «машина времени»', ['Прочитать раздел «Теория»: изменить прошлое в воображении', 'Аналогия Фейнмана: развилка дорог', 'Написать 3 предложения: что было бы, если бы вы не начали учить английский']],
    ['Third conditional', ['If + had + V3, would have + V3', 'Сокращения: <i>If I’d known, I’d have come.</i>', 'Цепочка «эффект бабочки»: 5 связанных условий']],
    ['Wish о настоящем', ['<i>I wish I had more time.</i> — сейчас нет', '<i>I wish I were taller. / I wish I could swim.</i>', 'Написать 5 желаний о своей жизни сейчас']],
    ['Wish о прошлом и if only', ['<i>I wish I had studied harder.</i> — сожаление', '<i>If only I hadn’t said that!</i> — сильнее', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать текст (~100 слов): <i>A decision that changed my life</i>', 'Проверить: в части с if нет would']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: четыре типа условий на одной шкале', 'Таблица: wish + Past / wish + Past Perfect', 'Список пробелов → план недели 6 (пассив во всех временах)']],
  ],
  progress: ['Third conditional', 'Wish о настоящем', 'Wish о прошлом', 'Выбор типа условия'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Third conditional — это <strong>воображаемое другое прошлое</strong>: «если бы тогда было иначе, результат был бы другим». Изменить уже ничего нельзя.</p>
    ${tl([['If I had left earlier', 'но я не вышел раньше'], ['I would have caught the train', 'но я не успел', 1]])}
    ${ex('If I had left earlier, I would have caught the train.', 'Если бы я вышел раньше, я бы успел на поезд (но не вышел и не успел).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте <strong>развилку дорог</strong> в прошлом. Вы пошли налево. Third conditional — это фантазия о дороге направо: <i>If I had turned right, I would have met…</i> Английский показывает «шаг в прошлое и шаг от реальности» формой <i>had + V3</i>.</p>
    ${note('<strong>Правило-проверка:</strong> речь о прошлом, и в русском есть «бы»? Это third conditional. «Бы» о настоящем — second conditional.')}
    <h3>Wish — желание «чтобы было иначе»</h3>
    ${ul(['О настоящем → wish + Past: <i>I wish I lived near the sea.</i> (а живу не у моря)', 'О прошлом → wish + Past Perfect: <i>I wish I had gone to the party.</i> (а не пошёл)', '<i>If only…</i> — то же, но эмоциональнее'])}`,
  forms: `
    <h3>Third conditional</h3>
    ${tbl(['', 'Условие', 'Результат'], [
      ['+', 'If I had known,', 'I would have helped.'],
      ['−', 'If she hadn’t missed the bus,', 'she <em>wouldn’t have been</em> late.'],
      ['?', 'If you had won,', 'what <em>would</em> you <em>have done</em>?']])}
    ${note('<strong>Внимание:</strong> <i>’d</i> в первой части — had, во второй — would: <i>If I’d (had) known, I’d (would) have come.</i>')}
    <h3>Wish и if only</h3>
    ${tbl(['О чём', 'Форма', 'Пример'], [
      ['настоящее', 'wish + Past Simple', 'I wish I <em>knew</em> the answer.'],
      ['настоящее (be)', 'wish + were', 'I wish I <em>were</em> on holiday.'],
      ['умение', 'wish + could', 'I wish I <em>could</em> drive.'],
      ['прошлое', 'wish + Past Perfect', 'I wish I <em>had listened</em> to you.'],
      ['раздражение', 'wish + would', 'I wish you <em>would</em> stop talking.']])}`,
  usage: `
    <h3>Сожаления и упрёки</h3>
    ${ul(['<i>If you had told me, I would have come.</i> — упрёк', '<i>I wish I hadn’t eaten so much.</i> — сожаление', '<i>If only I had bought that flat ten years ago!</i> — сильное сожаление'])}
    <h3>Смешанное условие (знакомство)</h3>
    ${ex('If I had studied medicine, I would be a doctor now.', 'Если бы я учился на врача (тогда), я был бы врачом сейчас.')}
    <p>Условие в прошлом (had + V3), результат в настоящем (would + V). На B1 достаточно узнавать такую форму.</p>
    <h3>Типичные ситуации</h3>
    ${ul(['Разбор ошибки: <i>If we had checked the map, we wouldn’t have got lost.</i>', 'Благодарность: <i>If you hadn’t helped me, I would have failed.</i>', 'Мечты о прошлом: <i>I wish I had learnt English as a child.</i>'])}`,
  compare: `
    ${tbl(['Тип', 'Схема', 'Пример', 'Смысл'], [
      ['Zero', 'If + Present, Present', 'If you heat ice, it melts.', 'всегда так'],
      ['First', 'If + Present, will', 'If it rains, I’ll stay in.', 'реально в будущем'],
      ['Second', 'If + Past, would', 'If I had a car, I’d drive.', 'нереально сейчас'],
      ['Third', 'If + had V3, would have V3', 'If I’d known, I’d have come.', 'нереально в прошлом']])}
    <h3>Одна ситуация — три взгляда</h3>
    ${ex('If I see Tom, I’ll tell him.', 'Если увижу Тома, скажу ему (реально).')}
    ${ex('If I saw Tom, I’d tell him.', 'Если бы я увидел Тома, сказал бы ему (маловероятно).')}
    ${ex('If I had seen Tom, I would have told him.', 'Если бы я увидел Тома (тогда), я бы ему сказал (но не увидел).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> <i>If I would have known…</i> — would в части с if не ставится. Правильно: <i>If I <em>had</em> known…</i>')}`,
  dialog: [
    ['N', 'How was the interview?', 'Как прошло собеседование?'],
    ['O', 'Terrible. I was twenty minutes late. If I had left home earlier, I wouldn’t have missed the train.', 'Ужасно. Я опоздал на двадцать минут. Если бы я вышел раньше, не опоздал бы на поезд.'],
    ['N', 'Oh no! Did they still see you?', 'О нет! Они всё-таки тебя приняли?'],
    ['O', 'Yes, but I was so nervous. I wish I had prepared better.', 'Да, но я так нервничал. Жаль, что я не подготовился лучше.'],
    ['N', 'Why didn’t you call me? I would have given you a lift if you’d asked.', 'Почему ты мне не позвонил? Я бы тебя подвёз, если бы ты попросил.'],
    ['O', 'If only I’d thought of that! I wish I weren’t so disorganised.', 'Если бы я только об этом подумал! Хотел бы я быть не таким несобранным.'],
    ['N', 'Don’t be so hard on yourself. If they don’t offer you the job, you’ll find another one.', 'Не будь к себе так строг. Если тебе не предложат эту работу, найдёшь другую.'],
    ['O', 'You’re right. And if I get it, I’ll buy you dinner!', 'Ты прав. А если получу её, угощу тебя ужином!'],
  ],
  test: [
    { q: 'If I ___ earlier, I would have caught the train.', o: ['left', 'had left', 'would leave', 'have left'], a: 1, c: 0, e: 'Third conditional: if + had + V3.' },
    { q: 'If you had told me, I ___ you.', o: ['would help', 'helped', 'would have helped', 'will help'], a: 2, c: 0, e: 'Результат в нереальном прошлом → would have + V3.' },
    { q: 'If she ___ the bus, she wouldn’t have been late.', o: ['hadn’t missed', 'didn’t miss', 'wouldn’t miss', 'hasn’t missed'], a: 0, c: 0, e: 'Отрицание в условии: hadn’t + V3.' },
    { q: 'I wish I ___ more free time. (сейчас нет)', o: ['have', 'will have', 'had had', 'had'], a: 3, c: 1, e: 'Wish о настоящем → Past Simple.' },
    { q: 'I wish I ___ taller.', o: ['am', 'were', 'have been', 'would be'], a: 1, c: 1, e: 'Wish + were для всех лиц.' },
    { q: 'I wish I ___ so much last night. I feel awful.', o: ['didn’t eat', 'don’t eat', 'hadn’t eaten', 'wouldn’t eat'], a: 2, c: 2, e: 'Сожаление о прошлом → wish + Past Perfect.' },
    { q: 'If only I ___ that flat ten years ago!', o: ['had bought', 'bought', 'would buy', 'have bought'], a: 0, c: 2, e: 'If only + Past Perfect — сожаление о прошлом.' },
    { q: 'If it ___ tomorrow, we’ll cancel the picnic.', o: ['will rain', 'rained', 'had rained', 'rains'], a: 3, c: 3, e: 'Реальное будущее → first conditional: if + Present.' },
    { q: 'If I won the lottery, I ___ a house. (фантазия сейчас)', o: ['will buy', 'would buy', 'would have bought', 'bought'], a: 1, c: 3, e: 'Нереально сейчас → second conditional: would + V.' },
    { q: 'Which is correct?', o: ['If I would have known, I would have come.', 'If I knew, I would have come yesterday.', 'If I had known, I would come yesterday.', 'If I had known, I would have come.'], a: 3, c: 3, e: 'If + had V3, would have V3.' },
  ],
  feynman: {
    task: 'Объясните четыре типа условных предложений на одной шкале «реальность — фантазия, сейчас — прошлое» так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему в <i>If I had known</i> нет would?', 'Чем <i>I wish I had</i> отличается от <i>I wish I had had</i>?', 'Что такое «развилка дорог» в third conditional?', 'Назовите 3 своих сожаления через wish и 3 «если бы тогда…».'],
  },
});
