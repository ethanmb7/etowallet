import { useCallback, useState } from 'react';

import { Button, Page, YStack } from '@onekeyhq/components';
import type { IAddressItem } from '@onekeyhq/kit/src/views/AddressBook/type';
import { getNetworkIdsMap } from '@onekeyhq/shared/src/config/networkIds';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';

const items: IAddressItem[] = [
  // eth
  {
    networkId: getNetworkIdsMap().eth,
    address: '0xf43441A870594392f6Eeb2C78FF3e700a7f1fE9f',
    name: 'account #1',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0xE4B7c844ADBA831A0012F44b26AA23Db43B2850E',
    name: 'account #2',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x352207D6CA57C29771eaf7EA5C4feA8207ad5862',
    name: 'account #3',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x1152Bac8059266aA2Bf035A1a345FA75b297Db0D',
    name: 'account #4',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x9F0d68b029DB74609c7fca3f118aD2eB19682771',
    name: 'account #5',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x766983B5cFA05e740d44965Bee7A4Ade86ed9e39',
    name: 'account #6',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x8970B3a17eCE6140c6f9579A9fb5FdE9F74fE148',
    name: 'account #7',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x73679190b061dd05778F6d5E2c71c4Dbda9Fe351',
    name: 'account #8',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0x1296d00E7A57c30774dC54b65E0C48d3C0812ba8',
    name: 'account #9',
  },
  {
    networkId: getNetworkIdsMap().eth,
    address: '0xcA566550149112BCBdbf9beceF88209d3d3Fa106',
    name: 'account #10',
  },
  // btc
  {
    networkId: getNetworkIdsMap().btc,
    address: '17wnMQUXC8JZJ4hRt5S38xsE9GdsH5YgXZ',
    name: 'account #11',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '17AWvfT15dz9xgShoL9ExEo4QrDoU7yYww',
    name: 'account #12',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '1PHuDpPztsf15psTo822ecgde7L8iwDXS4',
    name: 'account #13',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '12nyhwqmKs8PemAFffvz3wp8c1uoDzDqxh',
    name: 'account #14',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '12dQccMFr2psyiUsTVstUHsPsiKNT6Eyr9',
    name: 'account #15',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '1Jaw5NfgVh2qMZRVBN5ZJRmcoYMVhwR6bu',
    name: 'account #16',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '1KqMCyujDsuGxaFaJeNKNmUTLfZ33Q8gfV',
    name: 'account #17',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '1NRWBVjta9pdvWTvCkJ4dZ9MphkJiRzHkW',
    name: 'account #18',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '17PPaL5hESxJ7r9TqtjzFCEK6QvBWN6RPQ',
    name: 'account #19',
  },
  {
    networkId: getNetworkIdsMap().btc,
    address: '1LVcXXA6CGeJ3TAcLeRrMfhiDwdMGjh6sa',
    name: 'account #20',
  },
  // sol
  {
    networkId: getNetworkIdsMap().sol,
    address: '8yAmEoio2d7DszNucNzKf4AqW2JfGRJ1z5Nu9czdrgc1',
    name: 'account #21',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: 'GpUkRaadTaDmqDMgVqMUwjiTU7uXsCqobE35GbBkwrom',
    name: 'account #22',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: '7kmtkNnK53pMmnGGUj79wAJ4T4VSSL5YB8LtbBCPKvDw',
    name: 'account #23',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: 'AvK4KPF4D7EVw2d8RALqoV2KenKuaD5z7bTBrrSrFoGo',
    name: 'account #24',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: 'DtqrYF9YbEKuZ6PiFft1KJkALG3PJ1UDQWph3CAxfe2G',
    name: 'account #25',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: 'H3xE1tqNFopVQrjhgubo1yBscx3RzZ7G7kLYb4uhUNtk',
    name: 'account #26',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: '2sJW6xGdtu3PDm4Re1i3sphDusttKd6dktjU23GXNGqn',
    name: 'account #27',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: '8KazGCjsz6i6cB2Q2YFUULuSA7L25n8LFugkvHi1dLrU',
    name: 'account #28',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: 'HqAg8cf6PGGUrqPZboAMijJMbRv2r8mt7zpawSchmPwe',
    name: 'account #29',
  },
  {
    networkId: getNetworkIdsMap().sol,
    address: 'WjFLLR5y8xpEvGAhLsxApo1xLMZojBqHBUKD2N69cja',
    name: 'account #30',
  },
  // apt
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0xd7663c457cfb8516f400454c4d31b43a0161596d5109e3b789848f371fbaee8d',
    name: 'account #31',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0xf868d8bbe617564bf0dd55494f02020e3db6a09d0c25daee971d2c319deecbb8',
    name: 'account #32',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0x1e6a9e16dbf54f65e827fde7ed05c8f46137b0444620bc1b4b2ef74143bcb8ec',
    name: 'account #33',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0x014855622e701013afc695c655065d4a343131d9c9c490a29b45b4b8f44652df',
    name: 'account #34',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0xfaf4132a8ba3a1fad75412e0a147bf2ce2c822edd15fda6ec232332c9a788919',
    name: 'account #35',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0x33c6a906fc46022c7ab3851dfe69720bd28a14c520ba8fcd3451023adf14d90a',
    name: 'account #36',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0x79265681eb8a325f190f8a9f3370df2e1f87129e27cd8309da133a19193a3673',
    name: 'account #37',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0xbcdd19c7671bbbde7e3c8b27e1ab99e34db0ee24f6241c38f95c93389e54d756',
    name: 'account #38',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0xe96b7340359b8ccd5caa43b38f85f5b598deebcb5cd688dde46c8589497d8c44',
    name: 'account #39',
  },
  {
    networkId: getNetworkIdsMap().apt,
    address:
      '0x37366e9d599008a84c47a51f04b84df8305d9a99baa855011a7415acc3e5f289',
    name: 'account #40',
  },
  // tron
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TSL3enaaPaL19yMsJSye2GwkwqtsB3EVr9',
    name: 'account #41',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TSyHLiWTQu3RXxf3LPikJ1Vc8kxUJJbSG8',
    name: 'account #42',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TANgcLQhfmjBy5ZQu9zBpxfZn1pg6bv8oN',
    name: 'account #43',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TXzUZWiMsUjTGUYRMnAnKyz5Ba7kZ18KYf',
    name: 'account #44',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TNNNQYp46LCi6MBJVox4NRHNoyHerJcrqJ',
    name: 'account #45',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TBHWDgPaJCetJT2xEhsH8ztaWsiTjdB1eQ',
    name: 'account #46',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TD7fgYpo8vfEmMsjBxE62LoWUFfnmzyQTJ',
    name: 'account #47',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TCLYjUErVwQ2UshtJ1QVgY3GrPFnpc6NKn',
    name: 'account #48',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TVtNjPVwgD5A2dCT6UpKfZqpwx2aTL9GfX',
    name: 'account #49',
  },
  {
    networkId: getNetworkIdsMap().trx,
    address: 'TNHcEpnnrcuD1zYZREK73R3M8qeNMQK5Ne',
    name: 'account #50',
  },
  // doge
  {
    networkId: getNetworkIdsMap().doge,
    address: 'DEAsDnGUt6iResnr5KAEhvw7LmCMmcAcrb',
    name: 'account #51',
  },
  {
    networkId: getNetworkIdsMap().doge,
    address: 'DGdDgmEPqGTprHEPkqRXvfNBv8qKdWQuEM',
    name: 'account #52',
  },
  {
    networkId: getNetworkIdsMap().doge,
    address: 'DNucwsME6YiizUPYuwxZHR4pDRyDuUR3EV',
    name: 'account #53',
  },
  {
    networkId: getNetworkIdsMap().doge,
    address: 'DLwaez2LsNEL66C23j9ksNjWodhKwA5Lo4',
    name: 'account #54',
  },
  {
    networkId: getNetworkIdsMap().doge,
    address: 'DHQg4sThJK8KwsmZLeco7r5PGvnbkvYrMu',
    name: 'account #55',
  },
  {
    networkId: getNetworkIdsMap().doge,
    address: 'DHr65aV2429ktRCmNv5RyG47gLfKfYfTd4',
    name: 'account #56',
  },
  // ltc
  {
    networkId: getNetworkIdsMap().ltc,
    address: 'MJ3iMaAVJQP5nnPK83DNmjyDFQ2rmVoiJq',
    name: 'account #61',
  },
  {
    networkId: getNetworkIdsMap().ltc,
    address: 'MF62z4xqswYkZxwNtNm3hp4MZtQyyRrNxh',
    name: 'account #62',
  },
  {
    networkId: getNetworkIdsMap().ltc,
    address: 'MVNYxLMVuvjkfUpSKTcHqMwBQzJRjpkGx5',
    name: 'account #63',
  },
  {
    networkId: getNetworkIdsMap().ltc,
    address: 'MKzCKGJsYsUM67iLpyaRQkqAiDZycjn77p',
    name: 'account #64',
  },
  {
    networkId: getNetworkIdsMap().ltc,
    address: 'MR8RhTkzADY1NJ4bFFmbc8kZqqJAgecrAH',
    name: 'account #65',
  },
  {
    networkId: getNetworkIdsMap().ltc,
    address: 'MKQ6E3ZdjB6XWeJFYtk5B34M6esQ8eXqfg',
    name: 'account #66',
  },
  // neurai
  {
    networkId: getNetworkIdsMap().xna,
    address: 'NWbd534Zdjxt3pAhpQ5PWtQ2kBby3WHpPY',
    name: 'account #71',
  },
  {
    networkId: getNetworkIdsMap().xna,
    address: 'NT1cJtzytu3etdpYGQwf6x56jVnKwEKHfa',
    name: 'account #72',
  },
  {
    networkId: getNetworkIdsMap().xna,
    address: 'NiEDSfzZzTzsiutc8c6VkfTuMQXobmGhoU',
    name: 'account #73',
  },
  // ckb
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqd54x4cq523klaejerkn0hlnkq2n549lrsq3hqqd',
    name: 'account #81',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqqetkjlt4fuurrlmycnm4057jqmh3rgywql6dmpr',
    name: 'account #82',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqg05madxdj8mhssh6lz26dcv2veyj7ly2suq4xmj',
    name: 'account #83',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqwqvfsyzmzsgyxvw5ngrq57pp2xf74ry3sg6dr77',
    name: 'account #84',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqys7zn30qpd5gzdm8wq9x02ev8t4fx3tuqcpd72y',
    name: 'account #85',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqtv7v8nmtgnvydawfuxwanwv2w8nk8elcql8vdjm',
    name: 'account #86',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqteqxf2d83ynh5zqzuy55x0x34azse8fpqhytkqd',
    name: 'account #87',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqrnhdyxu07amkpylvxf3alcyterfwj589slzg639',
    name: 'account #88',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyqrcv6r38wwzc0zvg3xhtfy7rw2ltk6naksfqpced',
    name: 'account #89',
  },
  {
    networkId: getNetworkIdsMap().ckb,
    address: 'ckb1qyq93fg5x0fumys57e5kwx8yvmg9ujdrqnlqch2d6y',
    name: 'account #90',
  },
  // bch
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qrn8juwq58recavydrx6c9r8uh6rf4k46qg2wqc8wd',
    name: 'account #91',
  },
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qz7n4c2298h0ruk3pwfvywxqdynrwscn9u0l5f4rd3',
    name: 'account #92',
  },
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qpjyw8hdllyzltfpfl3rxyjq8ef5ea7kmvx5emaf0x',
    name: 'account #93',
  },
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qptl0dmhhd26n7nk6jqwl8r7ee5klftehq4zdcd67y',
    name: 'account #94',
  },
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qqz7uczp6660zm0htrhj9uk80hx2x2qnk547fh72xu',
    name: 'account #95',
  },
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qpqdc6322dnemk6f4n5th0m9pqjhq8w8w54k5ca2fm',
    name: 'account #96',
  },
  {
    networkId: getNetworkIdsMap().bch,
    address: 'bitcoincash:qz5uy92ytzv9k9dasp5xera4u5542ygt6qmd5eancs',
    name: 'account #97',
  },
  // fil
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1lix5elmcdvmflzabcgh663vag4623ppdgl2pjwi',
    name: 'account #101',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1rlsrvhlmt7qyol6tdmims3pysedhsauxfwic3wi',
    name: 'account #102',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1kotd4vdurqmvspenttu4ag35dhiuwugpibpkuqy',
    name: 'account #103',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1jom2jzkn7cgq6h2t5kothpnaetecgqtvjpav6ka',
    name: 'account #104',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1myulslxuznz6mzuzpiwrefl6y4relctfv7id3ny',
    name: 'account #105',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1fxsjyjlvfywopbyevehg5be3czf5gr4vuqj2dfi',
    name: 'account #106',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1s6lseha3lgqwjooydi3a7awrxx3rmepadrethmi',
    name: 'account #107',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1vzhehbyf4os6icrhlftaxyri436f552oikit7cq',
    name: 'account #108',
  },
  {
    networkId: getNetworkIdsMap().fil,
    address: 'f1zwmw2angcx77sqnrd5o3chyn7k2lzvb4hdmztbi',
    name: 'account #109',
  },
  // algo
  {
    networkId: getNetworkIdsMap().algo,
    address: 'UJFB5V4LEANWTUP7OFZECCI54DETPTTFQNZXNCUJZYYXSQ3Y5B5E3OIGJQ',
    name: 'algo #1',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: 'NMJIWBUZ6H4DZ7KCDL5OWB4SBFLH3QYR3LMUENGSYYQHLJ32YEELTMBOKU',
    name: 'algo #2',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: 'DRNOK7VLA3IWBJIXTRBUFN3KNVSRFGVYAV6MUJ3BH7ZGMTDXNZUYCBEOAM',
    name: 'algo #3',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: 'AHTK73SWBSMQXCSXSVFFUJY3IDXEUUGZFXSPS3ULZY67G7HFK2BBINJP24',
    name: 'algo #4',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: 'BBNNFUEJMCH7A6C5KSYF5ZVJSXWTROV4WO342T6KH5LD6ZJ45NDOGVQ4JA',
    name: 'algo #5',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: 'FEUKU62HAOQMPXXRLWGBABRNKWASUA6SHBZMVLUATNE4Y4XJFL2VTN2QIE',
    name: 'algo #6',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: '4VX65NIFQ2PJ4LPADUMRLT5VC6OLQS3TYMKQQTBHHJ7QABFWY2PWBEFSIA',
    name: 'algo #7',
  },
  {
    networkId: getNetworkIdsMap().algo,
    address: 'f1zwmw2angcx77sqnrd5o3chyn7k2lzvb4hdmztbi',
    name: 'algo #8',
  },
  //
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1qya00v4z5es4v436aytd2t3man355xnxvhzlctmg9nnzg4phgtrh057n852ezc879tcr28vyhrp5jtrmc8wsj65lh73suz79sh',
    name: 'ada #1',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1q9r53ld8f7txslvgkq583hxu246vs8lm24vwpzapshwrg674sacy32nvkvz2qwtfu6grejxu824j2z05p8ltje8aa2uqr6kfg5',
    name: 'ada #2',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1qym7z8vyjj4f22fxu6uy7k6s8umdvg2kxztu07dhjzl7w7y8kxmn9rkwg5kav73d92tequg03ln5hck7a7g3lgagyccs7y2jhl',
    name: 'ada #3',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1qy7mzn3ld4tw30avp24rscu7s3he50vej6wkjlpftj0yfvyzyyaew6ereyclj2sdz8g8yc7wn52uf83x60e858suh0dqqglgxk',
    name: 'ada #4',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1q9609ncs33784m0e4d3hxlatvyrx2300xyqj5eq0scal3rjrmu6jvjx2tnj5dnn5hlvgkhm4t7r383z7v8l73xj05raqxrel6j',
    name: 'ada #5',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1qysgsfzyt7g769saxjh85ve86xpgq4lr9f49spa0ndnenqv9cr8up7v0at5a27rn8ce3ykl9x8r5s7k4eyt7s58r3ydses98yl',
    name: 'ada #6',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1q83dzz0qnc3s524dwuqhu7cf43aaxplpa7t2hp5v5ll2kzu9twvv9985vqx2c64525uq2lrzakxx0hlwh3m7jqlh05tq2qv0au',
    name: 'ada #7',
  },
  {
    networkId: getNetworkIdsMap().ada,
    address:
      'addr1qyu3ws27xrzemwsqcfnjjgr5dlyx0shmcff8t32r4yq04rxcmcvnjwg2qpp60ujr3s4ah06g77dr0295t8d5y5e8z6ts4a4fzl',
    name: 'ada #8',
  },
];

const AddressBookTest = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('START');
  const onPress = useCallback(async () => {
    let i = 0;
    try {
      const { isSafe, items: safeItems } =
        await backgroundApiProxy.serviceAddressBook.getSafeItems({});
      if (!isSafe || safeItems.length > 0) {
        return;
      }
      setLoading(true);
      for (; i < items.length - 1; i += 1) {
        await backgroundApiProxy.serviceAddressBook.addItem(items[i]);
        setButtonText(`${i}/${items.length}`);
      }
    } finally {
      if (i !== items.length - 1) {
        console.log('fail to add item', items[i]);
      }

      setLoading(false);
      setButtonText('START');
    }
  }, []);
  return (
    <Page>
      <YStack px="$4" space="$4">
        <Button onPress={onPress} loading={loading}>
          {buttonText}
        </Button>
      </YStack>
    </Page>
  );
};

export default AddressBookTest;
