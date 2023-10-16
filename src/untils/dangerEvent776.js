const dangerEvent776 = [
  {
    dependence:
      'Наличие микроорганизмов-продуцентов, препаратов, содержащих живые клетки и споры микроорганизмов в окружающей среде: воздухе, воде, на поверхностях',
    'ID': '1.1',
    label:
      'Заражение работника вследствие воздействия микроорганизмов-продуцентов, препаратов, содержащих живые клетки и споры микроорганизмов в воздухе, воде, на поверхностях',
  },
  {
    dependence: 'Патогенные микроорганизмы',
    'ID': '1.2',
    label:
      'Заболевание работника, связанное с воздействием патогенных микроорганизмов',
  },
  {
    dependence:
      'Неприменение СИЗ или применение поврежденных СИЗ, не сертифицированных СИЗ, не соответствующих размерам СИЗ, СИЗ, не соответствующих выявленным опасностям, составу или уровню воздействия вредных факторов',
    'ID': '2.1',
    label:
      'Травма или заболевание вследствие отсутствия защиты от вредных (травмирующих) факторов, от которых защищают СИЗ',
  },
  {
    dependence:
      'Скользкие, обледенелые, зажиренные, мокрые опорные поверхности',
    'ID': '3.1',
    label:
      'Падение при спотыкании или поскальзывании, при передвижении по скользким поверхностям или мокрым полам',
  },
  {
    dependence: 'Перепад высот, отсутствие ограждения на высоте свыше 5 м',
    'ID': '3.2',
    label: 'Падение с высоты или из-за перепада высот на поверхности',
  },
  {
    dependence: 'Перепад высот, отсутствие ограждения на высоте свыше 5 м',
    'ID': '3.3',
    label:
      'Падение из-за отсутствия ограждения, из-за обрыва троса, в котлован, в шахту при подъеме или спуске при нештатной ситуации',
  },
  {
    dependence: 'Перепад высот, отсутствие ограждения на высоте свыше 5 м',
    'ID': '3.4',
    label:
      'Падение из-за внезапного появления на пути следования большого перепада высот',
  },
  {
    dependence: 'Перепад высот, отсутствие ограждения на высоте свыше 5 м',
    'ID': '3.5',
    label: 'Падение с транспортного средства',
  },
  {
    dependence: 'Выполнение работ вблизи водоемов',
    'ID': '4.1',
    label: 'Утопление в результате падения в воду',
  },
  {
    dependence:
      'Выполнение работ вблизи технологических емкостей, наполненных водой или иными технологическими жидкостями',
    'ID': '4.4',
    label: 'Утопление в результате падения в емкость с жидкостью',
  },
  {
    dependence:
      'Выполнение работ в момент естественного (природного) затопления шахты',
    'ID': '4.5',
    label: 'Утопление в результате падения или попадания в воду',
  },
  {
    dependence: 'Обрушение подземных конструкций при монтаже',
    'ID': '5.1',
    label: 'Травма в результате заваливания или раздавливания',
  },
  {
    dependence:
      'Естественные природные подземные толчки и колебания земной поверхности, наводнения, пожары',
    'ID': '5.3',
    label:
      'Травма в результате заваливания или раздавливания, ожоги вследствие пожара, утопление при попадании в жидкость',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    'ID': '7.1',
    label: 'Наезд транспорта на человека',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    'ID': '7.2',
    label: 'Травмирование в результате дорожно-транспортного происшествия',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    'ID': '7.3',
    label:
      'Раздавливание человека, находящегося между двумя сближающимися транспортными средствами',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    'ID': '7.4',
    label:
      'Опрокидывание транспортного средства при нарушении способов установки и строповки грузов',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    'ID': '7.5',
    label: 'Опрокидывание транспортного средства при проведении работ',
  },
  {
    dependence: 'Подвижные части машин и механизмов',
    'ID': '8.1',
    label:
      'Удары, порезы, проколы, уколы, затягивания, наматывания, абразивные воздействия подвижными частями оборудования',
  },
  {
    dependence: 'Вредные химические вещества в воздухе рабочей зоны',
    'ID': '9.1',
    label:
      'Отравление воздушными взвесями вредных химических веществ в воздухе рабочей зоны',
  },
  {
    dependence: 'Воздействие на кожные покровы смазочных масел',
    'ID': '9.2',
    label: 'Заболевания кожи (дерматиты)',
  },
  {
    dependence: 'Контакт с высокоопасными веществами',
    'ID': '9.4',
    label: 'Отравления при вдыхании и попадании на кожу высокоопасных веществ',
  },
  {
    dependence: 'Образование токсичных паров при нагревании',
    'ID': '9.5',
    label:
      'Отравление при вдыхании паров вредных жидкостей, газов, пыли, тумана, дыма и твердых веществ',
  },
  {
    dependence: 'Воздействие химических веществ на кожу',
    'ID': '9.6',
    label:
      'Заболевания кожи (дерматиты) при воздействии химических веществ, не указанных в пунктах 9.2 - 9.6',
  },
  {
    dependence: 'Воздействие химических веществ на глаза',
    'ID': '9.7',
    label:
      'Травма оболочек и роговицы глаза при воздействии химических веществ, не указанных в пунктах 9.2 - 9.6',
  },
  {
    dependence: 'Химические реакции веществ, приводящие к пожару и взрыву',
    'ID': '10.1',
    label: 'Травмы, ожоги вследствие пожара или взрыва',
  },
  {
    dependence:
      'Недостаток кислорода в воздухе рабочей зоны в замкнутых технологических емкостях, из-за вытеснения его другими газами или жидкостями',
    'ID': '11.1',
    label:
      'Развитие гипоксии или удушья из-за недостатка кислорода в замкнутых технологических емкостях',
  },
  {
    dependence:
      'Недостаток кислорода в воздухе рабочей зоны в замкнутых технологических емкостях, из-за вытеснения его другими газами или жидкостями',
    'ID': '11.2',
    label:
      'Развитие гипоксии или удушья из-за вытеснения его другими газами или жидкостями',
  },
  {
    dependence:
      'Недостаток кислорода в воздухе рабочей зоны в замкнутых технологических емкостях, из-за вытеснения его другими газами или жидкостями',
    'ID': '11.3',
    label:
      'Развитие гипоксии или удушья из-за недостатка кислорода в подземных сооружениях',
  },
  {
    dependence:
      'Недостаток кислорода в воздухе рабочей зоны в замкнутых технологических емкостях, из-за вытеснения его другими газами или жидкостями',
    'ID': '11.4',
    label:
      'Развитие гипоксии или удушья из-за недостатка кислорода в безвоздушных средах',
  },
  {
    dependence: 'Аэрозоли преимущественно фиброгенного действия (АПФД)',
    'ID': '12.1',
    label: 'Повреждение органов дыхания частицами пыли',
  },
  {
    dependence: 'Аэрозоли преимущественно фиброгенного действия (АПФД)',
    'ID': '12.2',
    label: 'Повреждение глаз и кожных покровов вследствие воздействия пыли',
  },
  {
    dependence: 'Аэрозоли преимущественно фиброгенного действия (АПФД)',
    'ID': '12.3',
    label:
      'Повреждение органов дыхания вследствие воздействия воздушных взвесей вредных химических веществ',
  },
  {
    dependence: 'Аэрозоли преимущественно фиброгенного действия (АПФД)',
    'ID': '12.4',
    label:
      'Повреждение органов дыхания вследствие воздействия воздушных взвесей, содержащих смазочные масла',
  },
  {
    dependence: 'Аэрозоли преимущественно фиброгенного действия (АПФД)',
    'ID': '12.5',
    label:
      'Воздействие на органы дыхания воздушных взвесей, содержащих чистящие и обезжиривающие вещества',
  },
  {
    dependence: 'Материал, жидкость или газ, имеющие высокую температуру',
    'ID': '13.1',
    label:
      'Ожог при контакте незащищенных частей тела с поверхностью предметов, имеющих высокую температуру',
  },
  {
    dependence: 'Материал, жидкость или газ, имеющие высокую температуру',
    'ID': '13.2',
    label:
      'Ожог от воздействия на незащищенные участки тела материалов, жидкостей или газов, имеющих высокую температуру',
  },
  {
    dependence: 'Материал, жидкость или газ, имеющие высокую температуру',
    'ID': '13.3',
    label:
      'Тепловой удар при длительном нахождении в помещении с высокой температурой воздуха',
  },
  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    'ID': '13.4',
    label: 'Тепловой удар при длительном нахождении вблизи открытого пламени',
  },
  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    'ID': '13.5',
    label:
      'Ожог кожных покровов и слизистых оболочек вследствие воздействия открытого пламени',
  },
  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    'ID': '13.6',
    label: 'Ожог роговицы глаза',
  },
  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    'ID': '13.7',
    label:
      'Ожог вследствие воздействия на незащищенные участки тела материалов, жидкостей или газов, имеющих высокую температуру',
  },
  {
    dependence:
      'Поверхности, имеющие высокую температуру (воздействие конвективной теплоты)',
    'ID': '13.8',
    label:
      'Тепловой удар от воздействия окружающих поверхностей оборудования, имеющих высокую температуру',
  },
  {
    dependence:
      'Поверхности, имеющие высокую температуру (воздействие конвективной теплоты)',
    'ID': '13.9',
    label:
      'Ожог кожных покровов работника вследствие контакта с поверхностью имеющую высокую температуру',
  },
  {
    dependence: 'Прямое воздействие солнечных лучей',
    'ID': '13.10',
    label:
      'Тепловой удар при длительном нахождении на открытом воздухе при прямом воздействии лучей солнца на незащищенную поверхность головы',
  },
  {
    dependence: 'Охлажденная поверхность, охлажденная жидкость или газ',
    'ID': '14.1',
    label:
      'Заболевания вследствие переохлаждения организма, обморожение мягких тканей из-за контакта с поверхностью, имеющую низкую температуру, с охлажденной жидкостью или газом',
  },
  {
    dependence:
      'Высокая влажность окружающей среды, в рабочей зоне, в том числе, связанная с климатом (воздействие влажности в виде тумана, росы, атмосферных осадков, конденсата, струй и капель жидкости)',
    'ID': '15.1',
    label: 'Заболевания вследствие переохлаждения организма',
  },
  {
    dependence:
      'Высокая или низкая скорость движения воздуха, в том числе, связанная с климатом',
    'ID': '16.1',
    label: 'Заболевания вследствие перегрева или переохлаждения организма',
  },
  {
    dependence:
      'Высокая или низкая скорость движения воздуха, в том числе, связанная с климатом',
    'ID': '16.2',
    label: 'Травмы вследствие воздействия высокой скорости движения воздуха',
  },
  {
    dependence:
      'Повышенное барометрическое давление (при выполнении водолазных спусков и кессонных работ, при подводном плавании в аквалангах, при лечении сжатым воздухом или кислородом в камерах повышенного давления и барокамерах, предназначенных для проведения хирургических операций)',
    'ID': '17.1',
    label: 'Декомпрессионная болезнь, баротравмы легких',
  },
  {
    dependence:
      'Пониженное барометрическое давление (пребывание на высоте в условиях пониженного барометрического давления и обусловленного этим уменьшения парциального давления газов, входящих в состав воздуха, в том числе кислорода)',
    'ID': '18.1',
    label:
      'Заболевания, связанные с работой в условиях пониженного барометрического давления, обострение общих заболеваний вследствие пониженного барометрического давления',
  },
  {
    dependence: 'Резкое изменение барометрического давления',
    'ID': '19.1',
    label:
      'Баротравма, декомпрессионная болезнь, вызванные резким изменением барометрического давления',
  },
  {
    dependence:
      'Повышенный уровень шума и другие неблагоприятные характеристики шума',
    'ID': '20.1',
    label:
      'Снижение остроты слуха, тугоухость, глухота, повреждение мембранной перепонки уха, связанные с воздействием повышенного уровня шума и других неблагоприятных характеристик шума',
  },
  {
    dependence:
      'Повышенный уровень шума и другие неблагоприятные характеристики шума',
    'ID': '20.2',
    label:
      'События, связанные с возможностью не услышать звуковой сигнал об опасности',
  },
  {
    dependence:
      'Повышенный уровень ультразвуковых колебаний (воздушный и контактный ультразвук)',
    'ID': '20.3',
    label:
      'Обусловленные воздействием ультразвука снижение уровня слуха (тугоухость), вегетососудистая дистония, астенический синдром',
  },
  {
    dependence:
      'Воздействие локальной вибрации при использовании ручных механизмов и инструментов',
    'ID': '21.1',
    label:
      'Воздействие локальной вибрации на руки работника при использовании ручных механизмов (сужение сосудов, болезнь белых пальцев)',
  },
  {
    dependence:
      'Воздействие общей вибрации (колебания всего тела, передающиеся с рабочего места).',
    'ID': '21.2',
    label: 'Воздействие общей вибрации на тело работника',
  },
  {
    dependence:
      'Груз, инструмент или предмет, перемещаемый или поднимаемый, в том числе на высоту',
    'ID': '22.1',
    label:
      'Удар работника или падение на работника предмета, тяжелого инструмента или груза, упавшего при перемещении или подъеме',
  },
  {
    dependence:
      'Физические перегрузки при чрезмерных физических усилиях при подъеме предметов и деталей, при перемещении предметов и деталей, при стереотипных рабочих движениях и при статических нагрузках, при неудобной рабочей позе, в том числе при наклонах корпуса тела работника более чем на 30°',
    'ID': '23.1',
    label:
      'Повреждение костно-мышечного аппарата работника при физических перегрузках',
  },
  {
    dependence:
      'Монотонность труда при выполнении однообразных действий или непрерывной и устойчивой концентрации внимания в условиях дефицита сенсорных нагрузок',
    'ID': '24.1',
    label: 'Психоэмоциональные перегрузки',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.1',
    label: 'Укус животного',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.2',
    label: 'Травма, нанесенная зубами и когтями животного',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.3',
    label: 'Раздавливание животным',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.4',
    label: 'Заражение животным',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.5',
    label: 'Нападение животного',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.6',
    label: 'Отравление ядами животного происхождения',
  },
  {
    dependence: 'Дикие или домашние животные',
    'ID': '25.7',
    label: 'Воздействие выделений животного',
  },
  {
    dependence:
      'Наличие на рабочем месте паукообразных и насекомых, включая кровососущих',
    'ID': '26.1',
    label:
      'Аллергическая реакция, вызванная укусом насекомого или паукообразного, отравление при попадании в организм при укусе яда насекомого или паукообразного',
  },
  {
    dependence:
      'Наличие на рабочем месте паукообразных и насекомых, включая кровососущих',
    'ID': '26.2',
    label: 'Попадание в организм насекомого или паукообразного',
  },
  {
    dependence:
      'Наличие на рабочем месте паукообразных и насекомых, включая кровососущих',
    'ID': '26.3',
    label:
      'Заражение инфекционным заболеванием или гельминтозом (паразитическими червями) через укусы кровососущих насекомых или паукообразных',
  },
  {
    dependence: 'Электрический ток',
    'ID': '27.1',
    label:
      'Контакт с частями электрооборудования, находящимися под напряжением',
  },
  {
    dependence: 'Электрический ток',
    'ID': '27.2',
    label: 'Отсутствие заземления или неисправность электрооборудования',
  },
  {
    dependence: 'Электрический ток',
    'ID': '27.3',
    label:
      'Нарушение правил эксплуатации и ремонта электрооборудования, неприменение СИЗ',
  },
  {
    dependence: 'Электрический ток',
    'ID': '27.4',
    label: 'Воздействие электрической дуги',
  },
  {
    dependence: 'Шаговое напряжение',
    'ID': '27.5',
    label: 'Поражение электрическим током',
  },
  {
    dependence:
      'Искры, возникающие вследствие накопления статического электричества, в том числе при работе во взрыво-пожароопасной среде',
    'ID': '27.6',
    label:
      'Ожог, пожар или взрыв при искровом зажигании взрыво-пожароопасной среды',
  },
  {
    dependence: 'Насилие от враждебно-настроенных работников/третьих лиц',
    'ID': '28.1',
    label: 'Психофизическая нагрузка',
  },
];
export default dangerEvent776;
