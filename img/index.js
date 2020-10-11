const fs = require("fs");
var items = {
    "Dvarf.ArmorTierI.HELMET": {
      "name": "<span class='gold'>Капюшон из шкуры</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+8.0 Броня</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierI.HELMET.png"
    },
    "Dvarf.ArmorTierI.CHESTPLATE": {
      "name": "<span class='gold'>Накидка из шкуры</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+14.0 Броня</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierI.CHESTPLATE.png"
    },
    "Dvarf.ArmorTierI.LEGGINGS": {
      "name": "<span class='gold'>Штаны из шкуры</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierI.LEGGINGS.png"
    },
    "Dvarf.ArmorTierI.BOOTS": {
      "name": "<span class='gold'>Ботинки из шкуры</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+6.0 Броня</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierI.BOOTS.png"
    },
    "Dvarf.ArmorTierII.HELMET": {
      "name": "<span class='gold'>Гномий шлем</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierII.HELMET.png"
    },
    "Dvarf.ArmorTierII.CHESTPLATE": {
      "name": "<span class='gold'>Гномий нагрудник</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+20.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierII.CHESTPLATE.png"
    },
    "Dvarf.ArmorTierII.LEGGINGS": {
      "name": "<span class='gold'>Гномьи поножи</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+18.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierII.LEGGINGS.png"
    },
    "Dvarf.ArmorTierII.BOOTS": {
      "name": "<span class='gold'>Гномьи ботинки</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierII.BOOTS.png"
    },
    "Dvarf.ArmorTierIII.HELMET": {
      "name": "<span class='gold'>Тяжёлый гномий шлем</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+16.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.01 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierIII.HELMET.png"
    },
    "Dvarf.ArmorTierIII.CHESTPLATE": {
      "name": "<span class='gold'>Тяжёлый гномий нагрудник</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+24.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.01 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierIII.CHESTPLATE.png"
    },
    "Dvarf.ArmorTierIII.LEGGINGS": {
      "name": "<span class='gold'>Тяжёлые гномьи поножи</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+22.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.01 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierIII.LEGGINGS.png"
    },
    "Dvarf.ArmorTierIII.BOOTS": {
      "name": "<span class='gold'>Тяжёлые гномьи ботинки</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+13.0 Броня</span>",
        "<span class='red'>-3.0 Прочность</span>",
        "<span class='red'>-0.01 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ArmorTierIII.BOOTS.png"
    },
    "Dvarf.Weapon.KingDoubleAxe": {
      "name": "<span class='gold'>Гномья королевская секира</span>",
      "lore": [
        "<b><span class='white'>Двуручное</span></b>",
        "",
        "<span class='red'>-5.0 Прочность</span>",
        "<span class='blue'>+40 Урон</span>",
        "<span class='red'>-3.7 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.KingDoubleAxe.png"
    },
    "Dvarf.Weapon.DoubleAxe": {
      "name": "<span class='gold'>Гномья секира</span>",
      "lore": [
        "<b><span class='white'>Двуручное</span></b>",
        "",
        "<span class='red'>-5.0 Прочность</span>",
        "<span class='blue'>+35 Урон</span>",
        "<span class='red'>-3.65 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.DoubleAxe.png"
    },
    "Dvarf.Weapon.Axe": {
      "name": "<span class='gold'>Гномий боевой топор</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+25 Урон</span>",
        "<span class='red'>-3.4 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.Axe.png"
    },
    "Dvarf.Weapon.MinShield": {
      "name": "<span class='gold'>Лёгкий гномий щит</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+1.8 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.MinShield.png"
    },
    "Dvarf.Weapon.Shield": {
      "name": "<span class='gold'>Гномий щит</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+3.0 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.Shield.png"
    },
    "Dvarf.Weapon.HeavyShield": {
      "name": "<span class='gold'>Тяжёлый гномий щит</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+3.6 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.HeavyShield.png"
    },
    "Dvarf.Weapon.MinSword": {
      "name": "<span class='gold'>Гномий кинжал</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>",
        "<span class='blue'>+12 Урон</span>",
        "<span class='red'>-2.8 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.Weapon.MinSword.png"
    },
    "Dvarf.Ingot.PigLeather": {
      "name": "<span class='gold'>Плотная свинная шкура</span>",
      "lore": [],
      "image": "./img/items/Dvarf.Ingot.PigLeather.png"
    },
    "Dvarf.Ingot.ColdIngot": {
      "name": "<span class='gold'>Сплав с примесями</span>",
      "lore": [],
      "image": "./img/items/Dvarf.Ingot.ColdIngot.png"
    },
    "Dvarf.Ingot.ClearColdIngot": {
      "name": "<span class='gold'>Очищенный сплав</span>",
      "lore": [],
      "image": "./img/items/Dvarf.Ingot.ClearColdIngot.png"
    },
    "Dvarf.Ingot.Ingot": {
      "name": "<span class='gold'>Закалённый сплав с примесями</span>",
      "lore": [],
      "image": "./img/items/Dvarf.Ingot.Ingot.png"
    },
    "Dvarf.Ingot.ClearIngot": {
      "name": "<span class='gold'>Закалённый очищенный сплав</span>",
      "lore": [],
      "image": "./img/items/Dvarf.Ingot.ClearIngot.png"
    },
    "Dvarf.Ingot.Jewelry": {
      "name": "<span class='gold'>Драгоценности</span>",
      "lore": [],
      "image": "./img/items/Dvarf.Ingot.Jewelry.png"
    },
    "Dvarf.ToolsTierI.Pickaxe": {
      "name": "<span class='gold'>Гномья кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.8 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierI.Pickaxe.png"
    },
    "Dvarf.ToolsTierI.Axe": {
      "name": "<span class='gold'>Гномий топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.8 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierI.Axe.png"
    },
    "Dvarf.ToolsTierI.Shovel": {
      "name": "<span class='gold'>Гномья лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.8 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierI.Shovel.png"
    },
    "Dvarf.ToolsTierI.Hoe": {
      "name": "<span class='gold'>Гномья мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.8 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierI.Hoe.png"
    },
    "Dvarf.ToolsTierII.Pickaxe": {
      "name": "<span class='gold'>Улучшенная гномья кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierII.Pickaxe.png"
    },
    "Dvarf.ToolsTierII.Axe": {
      "name": "<span class='gold'>Улучшенный гномий топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierII.Axe.png"
    },
    "Dvarf.ToolsTierII.Shovel": {
      "name": "<span class='gold'>Улучшенная гномья лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierII.Shovel.png"
    },
    "Dvarf.ToolsTierII.Hoe": {
      "name": "<span class='gold'>Улучшенная гномья мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.ToolsTierII.Hoe.png"
    },
    "Dvarf.ElfArmorTierII.HELMET": {
      "name": "<span class='gold'>Эльфийский шлем</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierII.HELMET.png"
    },
    "Dvarf.ElfArmorTierII.CHESTPLATE": {
      "name": "<span class='gold'>Эльфийский нагрудник</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+17.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierII.CHESTPLATE.png"
    },
    "Dvarf.ElfArmorTierII.LEGGINGS": {
      "name": "<span class='gold'>Эльфийские поножи</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+15.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierII.LEGGINGS.png"
    },
    "Dvarf.ElfArmorTierII.BOOTS": {
      "name": "<span class='gold'>Эльфийские ботинки</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+8.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierII.BOOTS.png"
    },
    "Dvarf.ElfArmorTierIII.HELMET": {
      "name": "<span class='gold'>Улучшенный эльфийский шлем</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierIII.HELMET.png"
    },
    "Dvarf.ElfArmorTierIII.CHESTPLATE": {
      "name": "<span class='gold'>Улучшенный эльфийский нагрудник</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+20.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierIII.CHESTPLATE.png"
    },
    "Dvarf.ElfArmorTierIII.LEGGINGS": {
      "name": "<span class='gold'>Улучшенные эльфийские поножи</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+18.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierIII.LEGGINGS.png"
    },
    "Dvarf.ElfArmorTierIII.BOOTS": {
      "name": "<span class='gold'>Улучшенные эльфийские ботинки</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.ElfArmorTierIII.BOOTS.png"
    },
    "Dvarf.PeopleArmorTierII.HELMET": {
      "name": "<span class='gold'>Стальной шлем</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierII.HELMET.png"
    },
    "Dvarf.PeopleArmorTierII.CHESTPLATE": {
      "name": "<span class='gold'>Стальной нагрудник</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+18.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierII.CHESTPLATE.png"
    },
    "Dvarf.PeopleArmorTierII.LEGGINGS": {
      "name": "<span class='gold'>Стальные поножи</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+16.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierII.LEGGINGS.png"
    },
    "Dvarf.PeopleArmorTierII.BOOTS": {
      "name": "<span class='gold'>Стальные ботинки</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+9.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0035 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierII.BOOTS.png"
    },
    "Dvarf.PeopleArmorTierIII.HELMET": {
      "name": "<span class='gold'>Улучшенный стальной шлем</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+14.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.006 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierIII.HELMET.png"
    },
    "Dvarf.PeopleArmorTierIII.CHESTPLATE": {
      "name": "<span class='gold'>Улучшенный стальной нагрудник</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+24.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.006 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierIII.CHESTPLATE.png"
    },
    "Dvarf.PeopleArmorTierIII.LEGGINGS": {
      "name": "<span class='gold'>Улучшенные стальные поножи</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+20.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.006 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierIII.LEGGINGS.png"
    },
    "Dvarf.PeopleArmorTierIII.BOOTS": {
      "name": "<span class='gold'>Улучшенные стальные ботинки</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "<span class='gold'>Выкованы гномами</span>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.006 Скорость</span>"
      ],
      "image": "./img/items/Dvarf.PeopleArmorTierIII.BOOTS.png"
    },
    "Dvarf.ElfWeapon.SwordI": {
      "name": "<span class='gold'>Эльфийский клинок</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+22 Урон</span>",
        "<span class='red'>-3 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.ElfWeapon.SwordI.png"
    },
    "Dvarf.ElfWeapon.SwordII": {
      "name": "<span class='gold'>Улучшенный эльфийский клинок</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+27 Урон</span>",
        "<span class='red'>-3.2 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.ElfWeapon.SwordII.png"
    },
    "Dvarf.PeopleWeapon.DoubleSword": {
      "name": "<span class='gold'>Стальной двуручный меч</span>",
      "lore": [
        "<b><span class='white'>Двуручное</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='red'>-5.0 Прочность</span>",
        "<span class='blue'>+32 Урон</span>",
        "<span class='red'>-3.6 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.PeopleWeapon.DoubleSword.png"
    },
    "Dvarf.PeopleWeapon.Sword": {
      "name": "<span class='gold'>Стальной меч</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+22 Урон</span>",
        "<span class='red'>-3.3 Скорость атаки</span>"
      ],
      "image": "./img/items/Dvarf.PeopleWeapon.Sword.png"
    },
    "Dvarf.PeopleWeapon.MinShield": {
      "name": "<span class='gold'>Лёгкий стальной щит</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+1.5 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.PeopleWeapon.MinShield.png"
    },
    "Dvarf.PeopleWeapon.Shield": {
      "name": "<span class='gold'>Стальной щит</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+2.6 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.PeopleWeapon.Shield.png"
    },
    "Dvarf.PeopleWeapon.HeavyShield": {
      "name": "<span class='gold'>Тяжёлый стальной щит</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "<span class='gold'>Выкован гномами</span>",
        "",
        "<span class='blue'>+3.1 Прочность</span>"
      ],
      "image": "./img/items/Dvarf.PeopleWeapon.HeavyShield.png"
    },
    "Elf.ArmorTierI.HELMET": {
      "name": "<span class='aqua'>Резной шлем</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+6.0 Броня</span>",
        "<span class='red'>-0.001 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierI.HELMET.png"
    },
    "Elf.ArmorTierI.CHESTPLATE": {
      "name": "<span class='aqua'>Резной нагрудник</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-0.001 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierI.CHESTPLATE.png"
    },
    "Elf.ArmorTierI.LEGGINGS": {
      "name": "<span class='aqua'>Резные поножи</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+9.0 Броня</span>",
        "<span class='red'>-0.001 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierI.LEGGINGS.png"
    },
    "Elf.ArmorTierI.BOOTS": {
      "name": "<span class='aqua'>Резные ботинки</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+5.0 Броня</span>",
        "<span class='red'>-0.001 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierI.BOOTS.png"
    },
    "Elf.ArmorTierII.HELMET": {
      "name": "<span class='aqua'>Эльфийский шлем</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+9.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierII.HELMET.png"
    },
    "Elf.ArmorTierII.CHESTPLATE": {
      "name": "<span class='aqua'>Эльфийский нагрудник</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+16.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierII.CHESTPLATE.png"
    },
    "Elf.ArmorTierII.LEGGINGS": {
      "name": "<span class='aqua'>Эльфийские поножи</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+13.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierII.LEGGINGS.png"
    },
    "Elf.ArmorTierII.BOOTS": {
      "name": "<span class='aqua'>Эльфийские ботинки</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+7.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierII.BOOTS.png"
    },
    "Elf.ArmorTierIII.HELMET": {
      "name": "<span class='aqua'>Шлем высших эльфов</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierIII.HELMET.png"
    },
    "Elf.ArmorTierIII.CHESTPLATE": {
      "name": "<span class='aqua'>Нагрудник высших эльфов</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+17.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierIII.CHESTPLATE.png"
    },
    "Elf.ArmorTierIII.LEGGINGS": {
      "name": "<span class='aqua'>Поножи высших эльфов</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+15.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierIII.LEGGINGS.png"
    },
    "Elf.ArmorTierIII.BOOTS": {
      "name": "<span class='aqua'>Ботинки высших эльфов</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+8.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/Elf.ArmorTierIII.BOOTS.png"
    },
    "Elf.Weapon.Sword0": {
      "name": "<span class='aqua'>Резной клинок</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+0.1 Прочность</span>",
        "<span class='blue'>+7 Урон</span>",
        "<span class='red'>-2 Скорость атаки</span>"
      ],
      "image": "./img/items/Elf.Weapon.Sword0.png"
    },
    "Elf.Weapon.SwordI": {
      "name": "<span class='aqua'>Эльфийский клинок</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+20 Урон</span>",
        "<span class='red'>-2.8 Скорость атаки</span>"
      ],
      "image": "./img/items/Elf.Weapon.SwordI.png"
    },
    "Elf.Weapon.SwordII": {
      "name": "<span class='aqua'>Клинок высших эльфов</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+25 Урон</span>",
        "<span class='red'>-3 Скорость атаки</span>"
      ],
      "image": "./img/items/Elf.Weapon.SwordII.png"
    },
    "Elf.Weapon.BowI": {
      "name": "<span class='aqua'>Лук</span>",
      "lore": [
        "<b><span class='white'>Стрелковое</span></b>",
        "",
        "<span class='blue'>+20 Урон</span>"
      ],
      "image": "./img/items/Elf.Weapon.BowI.png"
    },
    "Elf.Weapon.BowII": {
      "name": "<span class='aqua'>Эльфийский лук</span>",
      "lore": [
        "<b><span class='white'>Стрелковое</span></b>",
        "",
        "<span class='blue'>+25 Урон</span>"
      ],
      "image": "./img/items/Elf.Weapon.BowII.png"
    },
    "Elf.Weapon.BowIII": {
      "name": "<span class='aqua'>Лук высших эльфов</span>",
      "lore": [
        "<b><span class='white'>Стрелковое</span></b>",
        "",
        "<span class='blue'>+30 Урон</span>"
      ],
      "image": "./img/items/Elf.Weapon.BowIII.png"
    },
    "Elf.Weapon.KingBow": {
      "name": "<span class='aqua'>Королевский эльфийский лук</span>",
      "lore": [
        "<b><span class='white'>Стрелковое</span></b>",
        "",
        "<span class='blue'>+35 Урон</span>"
      ],
      "image": "./img/items/Elf.Weapon.KingBow.png"
    },
    "Elf.Weapon.Arrow": {
      "name": "Стрела",
      "lore": [],
      "image": "./img/items/Elf.Weapon.Arrow.png"
    },
    "Elf.Weapon.PoisonArrow": {
      "name": "<span class='aqua'>Стрела отравления</span>",
      "lore": [],
      "image": "./img/items/Elf.Weapon.PoisonArrow.png"
    },
    "Elf.Weapon.WeaknessArrow": {
      "name": "<span class='aqua'>Стрела слабости</span>",
      "lore": [],
      "image": "./img/items/Elf.Weapon.WeaknessArrow.png"
    },
    "Elf.Ingot.SuperLog": {
      "name": "<span class='aqua'>Плотное бревно</span>",
      "lore": [],
      "image": "./img/items/Elf.Ingot.SuperLog.png"
    },
    "Elf.Ingot.SuperStick": {
      "name": "<span class='aqua'>Плотная палка</span>",
      "lore": [],
      "image": "./img/items/Elf.Ingot.SuperStick.png"
    },
    "Elf.Ingot.ElfQuartz": {
      "name": "<span class='aqua'>Сияющий осколок</span>",
      "lore": [],
      "image": "./img/items/Elf.Ingot.ElfQuartz.png"
    },
    "Elf.Ingot.EnchantedElfQuartz": {
      "name": "<span class='aqua'>Зачарованный осколок</span>",
      "lore": [],
      "image": "./img/items/Elf.Ingot.EnchantedElfQuartz.png"
    },
    "Elf.ToolsTier0.Pickaxe": {
      "name": "<span class='aqua'>Резная кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTier0.Pickaxe.png"
    },
    "Elf.ToolsTier0.Axe": {
      "name": "<span class='aqua'>Резной топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTier0.Axe.png"
    },
    "Elf.ToolsTier0.Shovel": {
      "name": "<span class='aqua'>Резная лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTier0.Shovel.png"
    },
    "Elf.ToolsTier0.Hoe": {
      "name": "<span class='aqua'>Резная мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTier0.Hoe.png"
    },
    "Elf.ToolsTierI.Pickaxe": {
      "name": "<span class='aqua'>Эльфийская кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierI.Pickaxe.png"
    },
    "Elf.ToolsTierI.Axe": {
      "name": "<span class='aqua'>Эльфийский топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierI.Axe.png"
    },
    "Elf.ToolsTierI.Shovel": {
      "name": "<span class='aqua'>Эльфийская лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierI.Shovel.png"
    },
    "Elf.ToolsTierI.Hoe": {
      "name": "<span class='aqua'>Эльфийская мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierI.Hoe.png"
    },
    "Elf.ToolsTierII.Pickaxe": {
      "name": "<span class='aqua'>Улучшенная эльфийская кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.1 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierII.Pickaxe.png"
    },
    "Elf.ToolsTierII.Axe": {
      "name": "<span class='aqua'>Улучшенный эльфийский топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.1 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierII.Axe.png"
    },
    "Elf.ToolsTierII.Shovel": {
      "name": "<span class='aqua'>Улучшенная эльфийская лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.1 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierII.Shovel.png"
    },
    "Elf.ToolsTierII.Hoe": {
      "name": "<span class='aqua'>Улучшенная эльфийская мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.1 Прочность</span>"
      ],
      "image": "./img/items/Elf.ToolsTierII.Hoe.png"
    },
    "People.ArmorTierI.HELMET": {
      "name": "<span class='blue'>Шапка</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+7.0 Броня</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierI.HELMET.png"
    },
    "People.ArmorTierI.CHESTPLATE": {
      "name": "<span class='blue'>Куртка</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierI.CHESTPLATE.png"
    },
    "People.ArmorTierI.LEGGINGS": {
      "name": "<span class='blue'>Штаны</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierI.LEGGINGS.png"
    },
    "People.ArmorTierI.BOOTS": {
      "name": "<span class='blue'>Сапоги</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+6.0 Броня</span>",
        "<span class='red'>-0.0015 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierI.BOOTS.png"
    },
    "People.ArmorTierII.HELMET": {
      "name": "<span class='blue'>Стальной шлем</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierII.HELMET.png"
    },
    "People.ArmorTierII.CHESTPLATE": {
      "name": "<span class='blue'>Стальной нагрудник</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+17.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierII.CHESTPLATE.png"
    },
    "People.ArmorTierII.LEGGINGS": {
      "name": "<span class='blue'>Стальные поножи</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+15.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierII.LEGGINGS.png"
    },
    "People.ArmorTierII.BOOTS": {
      "name": "<span class='blue'>Стальные ботинки</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+1.5 Твёрдость брони</span>",
        "<span class='blue'>+8.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.0025 Скорость</span>"
      ],
      "image": "./img/items/People.ArmorTierII.BOOTS.png"
    },
    "People.ArmorTierIII.HELMET": {
      "name": "<span class='blue'>Рыцарский шлем</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+14.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/iron_helmet.png"
    },
    "People.ArmorTierIII.CHESTPLATE": {
      "name": "<span class='blue'>Рыцарский нагрудник</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+21.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/iron_chestplate.png"
    },
    "People.ArmorTierIII.LEGGINGS": {
      "name": "<span class='blue'>Рыцарские поножи</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+19.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/iron_leggings.png"
    },
    "People.ArmorTierIII.BOOTS": {
      "name": "<span class='blue'>Рыцарские ботинки</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+2.5 Твёрдость брони</span>",
        "<span class='blue'>+11.0 Броня</span>",
        "<span class='red'>-1.0 Прочность</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/iron_boots.png"
    },
    "People.Armor.Horse": {
      "name": "<span class='blue'>Конский доспех</span>",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+10.0 Твёрдость брони</span>",
        "<span class='blue'>+70.0 Броня</span>"
      ],
      "image": "./img/items/People.Armor.Horse.png"
    },
    "People.Weapon.KingDoubleSword": {
      "name": "<span class='blue'>Королевский двуручный меч</span>",
      "lore": [
        "<b><span class='white'>Двуручное</span></b>",
        "",
        "<span class='red'>-5.0 Прочность</span>",
        "<span class='blue'>+35 Урон</span>",
        "<span class='red'>-3.65 Скорость атаки</span>"
      ],
      "image": "./img/items/People.Weapon.KingDoubleSword.png"
    },
    "People.Weapon.DoubleSword": {
      "name": "<span class='blue'>Двуручный меч</span>",
      "lore": [
        "<b><span class='white'>Двуручное</span></b>",
        "",
        "<span class='red'>-5.0 Прочность</span>",
        "<span class='blue'>+30 Урон</span>",
        "<span class='red'>-3.45 Скорость атаки</span>"
      ],
      "image": "./img/items/People.Weapon.DoubleSword.png"
    },
    "People.Weapon.Sword": {
      "name": "<span class='blue'>Стальной меч</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+20 Урон</span>",
        "<span class='red'>-3.15 Скорость атаки</span>"
      ],
      "image": "./img/items/People.Weapon.Sword.png"
    },
    "People.Weapon.MinSword": {
      "name": "<span class='blue'>Стальной кинжал</span>",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+0.5 Прочность</span>",
        "<span class='blue'>+10 Урон</span>",
        "<span class='red'>-2.6 Скорость атаки</span>"
      ],
      "image": "./img/items/People.Weapon.MinSword.png"
    },
    "People.Weapon.MinShield": {
      "name": "<span class='blue'>Лёгкий стальной щит</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+1.2 Прочность</span>"
      ],
      "image": "./img/items/People.Weapon.MinShield.png"
    },
    "People.Weapon.StealShield": {
      "name": "<span class='blue'>Стальной щит</span>",
      "lore": [
        "<b><span class='white'>Легкая броня</span></b>",
        "",
        "<span class='blue'>+2.2 Прочность</span>"
      ],
      "image": "./img/items/People.Weapon.StealShield.png"
    },
    "People.Weapon.StealHeavyShield": {
      "name": "<span class='blue'>Тяжёлый стальной щит</span>",
      "lore": [
        "<b><span class='white'>Средняя броня</span></b>",
        "",
        "<span class='blue'>+2.7 Прочность</span>"
      ],
      "image": "./img/items/People.Weapon.StealHeavyShield.png"
    },
    "People.Weapon.CrossbowI": {
      "name": "<span class='blue'>Арбалет</span>",
      "lore": [
        "<b><span class='white'>Стрелковое</span></b>",
        "",
        "<span class='blue'>+20 Урон</span>",
        "<span class='red'>-0.04 Скорость</span>"
      ],
      "image": "./img/items/People.Weapon.CrossbowI.png"
    },
    "People.Weapon.CrossbowII": {
      "name": "<span class='blue'>Тяжёлый арбалет</span>",
      "lore": [
        "<b><span class='white'>Стрелковое</span></b>",
        "",
        "<span class='blue'>+25 Урон</span>",
        "<span class='red'>-0.09 Скорость</span>"
      ],
      "image": "./img/items/People.Weapon.CrossbowII.png"
    },
    "People.Weapon.Arrow": {
      "name": "Стрела",
      "lore": [],
      "image": "./img/items/People.Weapon.Arrow.png"
    },
    "People.Ingot.ColdIngot": {
      "name": "<span class='blue'>Сталь с примесями</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.ColdIngot.png"
    },
    "People.Ingot.ClearColdIngot": {
      "name": "<span class='blue'>Очищенная сталь</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.ClearColdIngot.png"
    },
    "People.Ingot.Ingot": {
      "name": "<span class='blue'>Закалённая сталь с примесями</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.Ingot.png"
    },
    "People.Ingot.ClearIngot": {
      "name": "<span class='blue'>Закалённая очищенная сталь</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.ClearIngot.png"
    },
    "People.Ingot.SuperLeather": {
      "name": "<span class='blue'>Дублёная кожа</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.SuperLeather.png"
    },
    "People.Ingot.Leather": {
      "name": "<span class='blue'>Обработанная кожа</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.Leather.png"
    },
    "People.Ingot.Salt": {
      "name": "<span class='blue'>Соль</span>",
      "lore": [],
      "image": "./img/items/People.Ingot.Salt.png"
    },
    "People.ToolsTierI.Pickaxe": {
      "name": "<span class='blue'>Стальная кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.3 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierI.Pickaxe.png"
    },
    "People.ToolsTierI.Axe": {
      "name": "<span class='blue'>Стальной топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.3 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierI.Axe.png"
    },
    "People.ToolsTierI.Shovel": {
      "name": "<span class='blue'>Стальная лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.3 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierI.Shovel.png"
    },
    "People.ToolsTierI.Hoe": {
      "name": "<span class='blue'>Стальная мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.3 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierI.Hoe.png"
    },
    "People.ToolsTierII.Pickaxe": {
      "name": "<span class='blue'>Улучшенная стальная кирка</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierII.Pickaxe.png"
    },
    "People.ToolsTierII.Axe": {
      "name": "<span class='blue'>Улучшенный стальной топор</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierII.Axe.png"
    },
    "People.ToolsTierII.Shovel": {
      "name": "<span class='blue'>Улучшенная стальная лопата</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierII.Shovel.png"
    },
    "People.ToolsTierII.Hoe": {
      "name": "<span class='blue'>Улучшенная стальная мотыга</span>",
      "lore": [
        "<b><span class='white'>Инструмент</span></b>",
        "",
        "<span class='blue'>+0.2 Прочность</span>"
      ],
      "image": "./img/items/People.ToolsTierII.Hoe.png"
    },
    "All.Ingot.Fairy": {
      "name": "<span class='yellow'>Волшебный порошок</span>",
      "lore": [],
      "image": "./img/items/All.Ingot.Fairy.png"
    },
    "All.Wand.Dvarf": {
      "name": "<span class='yellow'>Трость короля гномов</span>",
      "lore": [],
      "image": "./img/items/All.Wand.Dvarf.png"
    },
    "All.Wand.Elf": {
      "name": "<span class='yellow'>Трость короля эльфов</span>",
      "lore": [],
      "image": "./img/items/All.Wand.Elf.png"
    },
    "All.Wand.People": {
      "name": "<span class='yellow'>Трость короля людей</span>",
      "lore": [],
      "image": "./img/items/All.Wand.People.png"
    },
    "ALFA.ArmorTierIII.HELMET": {
      "name": "Тест шлем",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+7.0 Броня</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/ALFA.ArmorTierIII.HELMET.png"
    },
    "ALFA.ArmorTierIII.CHESTPLATE": {
      "name": "Тест нагрудник",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+12.0 Броня</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/ALFA.ArmorTierIII.CHESTPLATE.png"
    },
    "ALFA.ArmorTierIII.LEGGINGS": {
      "name": "Тест поножи",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+10.0 Броня</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/ALFA.ArmorTierIII.LEGGINGS.png"
    },
    "ALFA.ArmorTierIII.BOOTS": {
      "name": "Тест ботинки",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+1.0 Твёрдость брони</span>",
        "<span class='blue'>+6.0 Броня</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/ALFA.ArmorTierIII.BOOTS.png"
    },
    "ALFA.Weapon.Stick": {
      "name": "Тест меч",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+1000 Урон</span>"
      ],
      "image": "./img/items/ALFA.Weapon.Stick.png"
    },
    "ALFA.Weapon.Stick2": {
      "name": "Тест меч2",
      "lore": [
        "<b><span class='white'>Одноручное</span></b>",
        "",
        "<span class='blue'>+500 Урон</span>"
      ],
      "image": "./img/items/ALFA.Weapon.Stick2.png"
    },
    "ALFA.Armor.CHESTPLATE": {
      "name": "Тест нагрудник",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+100.0 Броня</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/ALFA.Armor.CHESTPLATE.png"
    },
    "ALFA.Armor.CHESTPLATE2": {
      "name": "Тест нагрудник",
      "lore": [
        "<b><span class='white'>Тяжелая броня</span></b>",
        "",
        "<span class='blue'>+20.0 Броня</span>",
        "<span class='red'>-0.005 Скорость</span>"
      ],
      "image": "./img/items/ALFA.Armor.CHESTPLATE2.png"
    },
    "Minecraft.DIAMOND": {
      "name": "Алмаз",
      "image": "./img/items/diamond.png"
    },
    "Minecraft.GOLD_INGOT": {
      "name": "Золотой слиток",
      "image": "./img/items/gold_ingot.png"
    },
    "Minecraft.IRON_INGOT":{
      "name": "Железный слиток",
      "image": "./img/items/iron_ingot.png"
    },
    "Minecraft.EMERALD": {
      "name": "Изумруд",
      "image": "./img/items/emerald.png"
    },
    "Minecraft.GLOWSTONE_DUST": {
      "name": "Светокаменная пыль",
      "image": "./img/items/glowstone_dust.png"
    },
    "Minecraft.STICK": {
      "name": "Палка",
      "image": "./img/items/stick.png"
    },
    "Minecraft.DARK_OAK_LOG": {
      "name": "Бревно тёмного дуба",
      "image": "./img/items/dark_oak_log.png"
    },
    "Minecraft.JUNGLE_LOG": {
      "name": "Бревно тропического дерева",
      "image": "./img/items/jungle_log.png"
    },
    "Minecraft.OAK_LOG": {
      "name": "Дубовое бревно",
      "image": "./img/items/oak_log.png"
    },
    "Minecraft.SPRUCE_LOG": {
      "name": "Еловое бревно",
      "image": "./img/items/spruce_log.png"
    },
    "Minecraft.BIRCH_LOG": {
      "name": "Берёзовое бревно",
      "image": "./img/items/brich_log.png"
    },
    "inecraft.ACACIA_LOG": {
      "name": "Акациевое бревно",
      "image": "./img/items/acacia_log.png"
    },
    "Minecraft.BLAZE_ROD": {
      "name": "Огненный стержень",
      "image": "./img/items/blaze_rod.png"
    },
    "Minecraft.QUARTZ": {
      "name": "Незер-кварц",
      "image": "./img/items/quartz.png"
    },
    "Minecraft.IRON_NUGGET": {
      "name": "Кусочек железа",
      "image": "./img/items/iron_nugget.png"
    },
    "Minecraft.LEATHER": {
      "name": "Кожаный шлем",
      "image": "./img/items/leather.png"
    },
    "Minecraft.ENDER_EYE": {
      "name": "Око Эндера",
      "image": "./img/items/ender_eye.png"
    },
    "Minecraft.JUNGLE_PLANKS": {
      "name": "Доски из тропического дерева",
      "image": "./img/items/jungle_planks.png"
    },
    "Minecraft.ACACIA_PLANKS": {
      "name": "Акациевые доски",
      "image": "./img/items/acacia_planks.png"
    },
    "Minecraft.BIRCH_PLANKS": {
      "name": "Берёзовые доски",
      "image": "./img/items/birch_planks.png"
    },
    "Minecraft.DARK_OAK_PLANKS": {
      "name": "Доски из тёмного дуба",
      "image": "./img/items/dark_oak_planks.png"
    },
    "Minecraft.OAK_PLANKS": {
      "name": "Дубовые доски",
      "image": "./img/items/oak_planks.png"
    },
    "Minecraft.STRING": {
      "name": "Нить",
      "image": "./img/items/string.png"
    },
    "Minecraft.SPIDER_EYE": {
      "name": "Паучий глаз",
      "image": "./img/items/spider_eye.png"
    },
    "Minecraft.ARROW": {
      "name": "Стрела",
      "image": "./img/items/arrow.png"
    },
    "Minecraft.FERMENTED_SPIDER_EYE": {
      "name": "Маринованный паучий глаз",
      "image": "./img/items/fermented_spider_eye.png"
    },
    "Minecraft.TRIPWIRE_HOOK": {
      "name": "Крюк",
      "image": "./img/items/tripwire_hook.png"
    },
    "Minecraft.LAPIS_LAZULI": {
      "name": "Лазурит",
      "image": "./img/items/lapis_lazuli.png"
    },
    "Minecraft.BREWING_STAND": {
      "name": "Варочная стойка",
      "image": "./img/items/brewing_stand.png"
    },
    "Minecraft.SADDLE": {
      "name": "Седло",
      "image": "./img/items/saddle.png"
    },
    "Minecraft.FLINT": {
      "name": "Кремень",
      "image": "./img/items/flint.png"
    },
    "Minecraft.IRON_ORE":{
      "name": "Железная руда",
      "image": ""
    },
    "Minecraft.GOLD_ORE":{
      "name": "Золотая руда",
      "image": ""
    },
    "Minecraft.GOLD_NUGGET": {
      "name": "Золотой самородок",
      "image": "./img/items/gold_nugget.png"
    },
    "Minecraft.SPRUCE_PLANKS": {
      "name": "Еловые доски",
      "image": "",
    }
  }
  
let dir = fs.readdirSync("./items");
dir.forEach((e) => {
    if (e.search("Elf") != -1){
        let newText = ""
        let lowerName = e.toLowerCase();
        let itemsList = Object.values(items);
        for(let i=0;i<itemsList.length;i++){
            if ( (itemsList[i].image).toLowerCase() == "./img/items/"+lowerName){
                console.log(itemsList[i].image);
                console.log(e);
                fs.renameSync("./items/"+e,itemsList[i].image.replace(/\/img/,""));
                break;
            }
        }
        //
        console.log(newText.slice(0,-1));
    }
});
function capitalizeFirstLetter([ first, ...rest ]) {
    return [ first.toUpperCase(), ...rest ].join('');
  }

