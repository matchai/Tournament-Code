/*------------------------------------*\
    On Pageload
\*------------------------------------*/

var splashes = [
  'Aatrox_Splash_0.jpg',
  'Aatrox_Splash_1.jpg',
  'Aatrox_Splash_2.jpg',
  'Ahri_Splash_0.jpg',
  'Ahri_Splash_1.jpg',
  'Ahri_Splash_3.jpg',
  'Ahri_Splash_4.jpg',
  'Ahri_Splash_5.jpg',
  'Ahri_splash_2.jpg',
  'Akali_Splash_0.jpg',
  'Akali_Splash_1.jpg',
  'Akali_Splash_2.jpg',
  'Akali_Splash_3.jpg',
  'Akali_Splash_4.jpg',
  'Akali_Splash_5.jpg',
  'Akali_Splash_6.jpg',
  'Alistar_Splash_0.jpg',
  'Alistar_Splash_1.jpg',
  'Alistar_Splash_2.jpg',
  'Alistar_Splash_3.jpg',
  'Alistar_Splash_4.jpg',
  'Alistar_Splash_5.jpg',
  'Alistar_Splash_6.jpg',
  'Alistar_Splash_7.jpg',
  'Amumu_Splash_0.jpg',
  'Amumu_Splash_1.jpg',
  'Amumu_Splash_2.jpg',
  'Amumu_Splash_3.jpg',
  'Amumu_Splash_4.jpg',
  'Amumu_Splash_5.jpg',
  'Amumu_Splash_6.jpg',
  'Amumu_Splash_7.jpg',
  'Anivia_Splash_0.jpg',
  'Anivia_Splash_1.jpg',
  'Anivia_Splash_2.jpg',
  'Anivia_Splash_3.jpg',
  'Anivia_Splash_4.jpg',
  'Anivia_Splash_5.jpg',
  'Annie_Splash_0.jpg',
  'Annie_Splash_1.jpg',
  'Annie_Splash_2.jpg',
  'Annie_Splash_3.jpg',
  'Annie_Splash_4.jpg',
  'Annie_Splash_5.jpg',
  'Annie_Splash_6.jpg',
  'Annie_Splash_7.jpg',
  'Annie_Splash_8.jpg',
  'Annie_Splash_9.jpg',
  'Ashe_Splash_0.jpg',
  'Ashe_Splash_1.jpg',
  'Ashe_Splash_2.jpg',
  'Ashe_Splash_3.jpg',
  'Ashe_Splash_4.jpg',
  'Ashe_Splash_5.jpg',
  'Ashe_Splash_6.jpg',
  'Ashe_Splash_7.jpg',
  'Azir_Splash_0.jpg',
  'Azir_Splash_1.jpg',
  'Blitzcrank_Splash_0.jpg',
  'Blitzcrank_Splash_1.jpg',
  'Blitzcrank_Splash_2.jpg',
  'Blitzcrank_Splash_3.jpg',
  'Blitzcrank_Splash_4.jpg',
  'Blitzcrank_Splash_5.jpg',
  'Blitzcrank_Splash_6.jpg',
  'Blitzcrank_Splash_7.jpg',
  'Brand_Splash_0.jpg',
  'Brand_Splash_1.jpg',
  'Brand_Splash_2.jpg',
  'Brand_Splash_3.jpg',
  'Brand_Splash_4.jpg',
  'Braum_Splash_0.jpg',
  'Braum_Splash_1.jpg',
  'Braum_Splash_2.jpg',
  'Caitlyn_Splash_0.jpg',
  'Caitlyn_Splash_1.jpg',
  'Caitlyn_Splash_2.jpg',
  'Caitlyn_Splash_3.jpg',
  'Caitlyn_Splash_4.jpg',
  'Caitlyn_Splash_5.jpg',
  'Caitlyn_Splash_6.jpg',
  'Cassiopeia_Splash_0.jpg',
  'Cassiopeia_Splash_1.jpg',
  'Cassiopeia_Splash_2.jpg',
  'Cassiopeia_Splash_3.jpg',
  'Cassiopeia_Splash_4.jpg',
  'Chogath_Splash_0.jpg',
  'Chogath_Splash_1.jpg',
  'Chogath_Splash_2.jpg',
  'Chogath_Splash_3.jpg',
  'Chogath_Splash_4.jpg',
  'Chogath_Splash_5.jpg',
  'Corki_Splash_0.jpg',
  'Corki_Splash_1.jpg',
  'Corki_Splash_2.jpg',
  'Corki_Splash_3.jpg',
  'Corki_Splash_4.jpg',
  'Corki_Splash_5.jpg',
  'Corki_Splash_6.jpg',
  'Corki_Splash_7.jpg',
  'Corky_Splash_0.jpg',
  'Darius_Splash_0.jpg',
  'Darius_Splash_1.jpg',
  'Darius_Splash_2.jpg',
  'Darius_Splash_3.jpg',
  'Darius_Splash_4.jpg',
  'Diana_Splash_0.jpg',
  'Diana_Splash_1.jpg',
  'Diana_Splash_2.jpg',
  'DrMundo_Splash_0.jpg',
  'DrMundo_Splash_1.jpg',
  'DrMundo_Splash_2.jpg',
  'DrMundo_Splash_3.jpg',
  'DrMundo_Splash_4.jpg',
  'DrMundo_Splash_5.jpg',
  'DrMundo_Splash_6.jpg',
  'DrMundo_Splash_7.jpg',
  'Draven_Splash_0.jpg',
  'Draven_Splash_1.jpg',
  'Draven_Splash_2.jpg',
  'Draven_Splash_3.jpg',
  'Elise_Splash_0.jpg',
  'Elise_Splash_1.jpg',
  'Elise_Splash_2.jpg',
  'Elise_Splash_3.jpg',
  'Evelynn_Splash_0.jpg',
  'Evelynn_Splash_1.jpg',
  'Evelynn_Splash_2.jpg',
  'Evelynn_Splash_3.jpg',
  'Evelynn_Splash_4.jpg',
  'Ezreal_Splash_0.jpg',
  'Ezreal_Splash_2.jpg',
  'Ezreal_Splash_3.jpg',
  'Ezreal_Splash_4.jpg',
  'Ezreal_Splash_5.jpg',
  'Ezreal_Splash_6.jpg',
  'Ezreal_Splash_7.jpg',
  'Ezreal_splash_1.jpg',
  'Fiddlesticks_Splash_0.jpg',
  'Fiddlesticks_Splash_1.jpg',
  'Fiddlesticks_Splash_2.jpg',
  'Fiddlesticks_Splash_3.jpg',
  'Fiddlesticks_Splash_4.jpg',
  'Fiddlesticks_Splash_5.jpg',
  'Fiddlesticks_Splash_6.jpg',
  'Fiddlesticks_Splash_7.jpg',
  'Fiora_Splash_0.jpg',
  'Fiora_Splash_1.jpg',
  'Fiora_Splash_2.jpg',
  'Fiora_Splash_3.jpg',
  'Fizz_Splash_1.jpg',
  'Fizz_Splash_2.jpg',
  'Fizz_Splash_3.jpg',
  'Fizz_Splash_4.jpg',
  'Fizz_splash_0.jpg',
  'Galio_Splash_0.jpg',
  'Galio_Splash_1.jpg',
  'Galio_Splash_2.jpg',
  'Galio_Splash_3.jpg',
  'Galio_Splash_4.jpg',
  'Gangplank_Splash_0.jpg',
  'Gangplank_Splash_1.jpg',
  'Gangplank_Splash_2.jpg',
  'Gangplank_Splash_3.jpg',
  'Gangplank_Splash_4.jpg',
  'Gangplank_Splash_5.jpg',
  'Gangplank_Splash_6.jpg',
  'Garen_Splash_0.jpg',
  'Garen_Splash_1.jpg',
  'Garen_Splash_2.jpg',
  'Garen_Splash_3.jpg',
  'Garen_Splash_4.jpg',
  'Garen_Splash_5.jpg',
  'Garen_Splash_6.jpg',
  'Gnar_Splash_0.jpg',
  'Gnar_Splash_1.jpg',
  'Gragas_Splash_0.jpg',
  'Gragas_Splash_1.jpg',
  'Gragas_Splash_2.jpg',
  'Gragas_Splash_3.jpg',
  'Gragas_Splash_4.jpg',
  'Gragas_Splash_5.jpg',
  'Gragas_Splash_6.jpg',
  'Gragas_Splash_7.jpg',
  'Gragas_Splash_8.jpg',
  'Graves_Splash_0.jpg',
  'Graves_Splash_1.jpg',
  'Graves_Splash_2.jpg',
  'Graves_Splash_3.jpg',
  'Graves_Splash_4.jpg',
  'Graves_Splash_5.jpg',
  'Hecarim_Splash_0.jpg',
  'Hecarim_Splash_1.jpg',
  'Hecarim_Splash_2.jpg',
  'Hecarim_Splash_3.jpg',
  'Hecarim_Splash_4.jpg',
  'Heimerdinger_Splash_0.jpg',
  'Heimerdinger_Splash_1.jpg',
  'Heimerdinger_Splash_2.jpg',
  'Heimerdinger_Splash_3.jpg',
  'Heimerdinger_Splash_4.jpg',
  'Heimerdinger_Splash_5.jpg',
  'Irelia_Splash_0.jpg',
  'Irelia_Splash_1.jpg',
  'Irelia_Splash_2.jpg',
  'Irelia_Splash_3.jpg',
  'Irelia_Splash_4.jpg',
  'Janna_Splash_0.jpg',
  'Janna_Splash_1.jpg',
  'Janna_Splash_2.jpg',
  'Janna_Splash_3.jpg',
  'Janna_Splash_4.jpg',
  'Janna_Splash_5.jpg',
  'Janna_Splash_6.jpg',
  'JarvanIV_Splash_0.jpg',
  'JarvanIV_Splash_1.jpg',
  'JarvanIV_Splash_2.jpg',
  'JarvanIV_Splash_3.jpg',
  'JarvanIV_Splash_4.jpg',
  'JarvanIV_Splash_5.jpg',
  'JarvanIV_Splash_6.jpg',
  'Jax_Splash_0.jpg',
  'Jax_Splash_1.jpg',
  'Jax_Splash_2.jpg',
  'Jax_Splash_3.jpg',
  'Jax_Splash_4.jpg',
  'Jax_Splash_5.jpg',
  'Jax_Splash_7.jpg',
  'Jax_Splash_8.jpg',
  'Jax_splash_6.jpg',
  'Jayce_Splash_0.jpg',
  'Jayce_Splash_1.jpg',
  'Jayce_Splash_2.jpg',
  'Jinx_Splash_0.jpg',
  'Jinx_Splash_1.jpg',
  'Jinx_Splash_2.jpg',
  'Kalista_Splash_0.jpg',
  'Kalista_Splash_1.jpg',
  'Karma_Splash_0.jpg',
  'Karma_Splash_1.jpg',
  'Karma_Splash_2.jpg',
  'Karma_Splash_3.jpg',
  'Karma_Splash_4.jpg',
  'Karthus_Splash_0.jpg',
  'Karthus_Splash_1.jpg',
  'Karthus_Splash_2.jpg',
  'Karthus_Splash_3.jpg',
  'Karthus_Splash_4.jpg',
  'Karthus_Splash_5.jpg',
  'Kassadin_Splash_0.jpg',
  'Kassadin_Splash_1.jpg',
  'Kassadin_Splash_2.jpg',
  'Kassadin_Splash_3.jpg',
  'Kassadin_Splash_4.jpg',
  'Katarina_Splash_1.jpg',
  'Katarina_Splash_2.jpg',
  'Katarina_Splash_3.jpg',
  'Katarina_Splash_4.jpg',
  'Katarina_Splash_5.jpg',
  'Katarina_Splash_6.jpg',
  'Katarina_Splash_7.jpg',
  'Katarina_Splash_8.jpg',
  'Kayle_Splash_0.jpg',
  'Kayle_Splash_1.jpg',
  'Kayle_Splash_2.jpg',
  'Kayle_Splash_3.jpg',
  'Kayle_Splash_4.jpg',
  'Kayle_Splash_5.jpg',
  'Kayle_Splash_6.jpg',
  'Kayle_Splash_7.jpg',
  'Kennen_Splash_0.jpg',
  'Kennen_Splash_1.jpg',
  'Kennen_Splash_2.jpg',
  'Kennen_Splash_3.jpg',
  'Kennen_Splash_4.jpg',
  'Kennen_Splash_5.jpg',
  'Khazix_Splash_0.jpg',
  'Khazix_Splash_1.jpg',
  'Khazix_Splash_2.jpg',
  'KogMaw_Splash_0.jpg',
  'KogMaw_Splash_1.jpg',
  'KogMaw_Splash_2.jpg',
  'KogMaw_Splash_3.jpg',
  'KogMaw_Splash_4.jpg',
  'KogMaw_Splash_5.jpg',
  'KogMaw_Splash_6.jpg',
  'KogMaw_Splash_7.jpg',
  'KogMaw_Splash_8.jpg',
  'Leblanc_Splash_0.jpg',
  'Leblanc_Splash_1.jpg',
  'Leblanc_Splash_2.jpg',
  'Leblanc_Splash_3.jpg',
  'Leblanc_Splash_4.jpg',
  'LeeSin_Splash_0.jpg',
  'LeeSin_Splash_1.jpg',
  'LeeSin_Splash_2.jpg',
  'LeeSin_Splash_3.jpg',
  'LeeSin_Splash_4.jpg',
  'LeeSin_Splash_5.jpg',
  'LeeSin_Splash_6.jpg',
  'Leona_Splash_0.jpg',
  'Leona_Splash_1.jpg',
  'Leona_Splash_2.jpg',
  'Leona_Splash_3.jpg',
  'Leona_Splash_4.jpg',
  'Lissandra_Splash_0.jpg',
  'Lissandra_Splash_1.jpg',
  'Lissandra_Splash_2.jpg',
  'Lucian_Splash_0.jpg',
  'Lucian_Splash_1.jpg',
  'Lucian_Splash_2.jpg',
  'Lulu_Splash_0.jpg',
  'Lulu_Splash_1.jpg',
  'Lulu_Splash_2.jpg',
  'Lulu_Splash_3.jpg',
  'Lulu_Splash_4.jpg',
  'Lux_Splash_0.jpg',
  'Lux_Splash_1.jpg',
  'Lux_Splash_2.jpg',
  'Lux_Splash_3.jpg',
  'Lux_Splash_4.jpg',
  'Lux_Splash_5.jpg',
  'Malphite_Splash_0.jpg',
  'Malphite_Splash_1.jpg',
  'Malphite_Splash_2.jpg',
  'Malphite_Splash_3.jpg',
  'Malphite_Splash_4.jpg',
  'Malphite_Splash_5.jpg',
  'Malphite_Splash_6.jpg',
  'Malzahar_Splash_0.jpg',
  'Malzahar_Splash_1.jpg',
  'Malzahar_Splash_2.jpg',
  'Malzahar_Splash_3.jpg',
  'Malzahar_Splash_4.jpg',
  'Malzahar_Splash_5.jpg',
  'Maokai_Splash_0.jpg',
  'Maokai_Splash_1.jpg',
  'Maokai_Splash_2.jpg',
  'Maokai_Splash_3.jpg',
  'Maokai_Splash_4.jpg',
  'Maokai_Splash_5.jpg',
  'MasterYi_Splash_4.jpg',
  'MasterYi_Splash_5.jpg',
  'Masteryi_Splash_0.jpg',
  'Masteryi_Splash_1.jpg',
  'Masteryi_Splash_2.jpg',
  'Masteryi_Splash_3.jpg',
  'MissFortune_Splash_0.jpg',
  'MissFortune_Splash_1.jpg',
  'MissFortune_Splash_2.jpg',
  'MissFortune_Splash_3.jpg',
  'MissFortune_Splash_4.jpg',
  'MissFortune_Splash_5.jpg',
  'MissFortune_Splash_6.jpg',
  'MissFortune_Splash_7.jpg',
  'MonkeyKing_Splash_0.jpg',
  'MonkeyKing_Splash_1.jpg',
  'MonkeyKing_Splash_2.jpg',
  'MonkeyKing_Splash_3.jpg',
  'MonkeyKing_Splash_4.jpg',
  'Mordekaiser_Splash_0.jpg',
  'Mordekaiser_Splash_1.jpg',
  'Mordekaiser_Splash_2.jpg',
  'Mordekaiser_Splash_3.jpg',
  'Mordekaiser_Splash_4.jpg',
  'Morgana_Splash_0.jpg',
  'Morgana_Splash_1.jpg',
  'Morgana_Splash_2.jpg',
  'Morgana_Splash_3.jpg',
  'Morgana_Splash_4.jpg',
  'Morgana_Splash_5.jpg',
  'Morgana_Splash_6.jpg',
  'Nami_Splash_0.jpg',
  'Nami_Splash_1.jpg',
  'Nami_Splash_2.jpg',
  'Nasus_Splash_0.jpg',
  'Nasus_Splash_1.jpg',
  'Nasus_Splash_2.jpg',
  'Nasus_Splash_3.jpg',
  'Nasus_Splash_4.jpg',
  'Nasus_Splash_5.jpg',
  'Nautilus_Splash_0.jpg',
  'Nautilus_Splash_1.jpg',
  'Nautilus_Splash_2.jpg',
  'Nautilus_Splash_3.jpg',
  'Nautilus_Splash_4.jpg',
  'Nidalee_Splash_0.jpg',
  'Nidalee_Splash_1.jpg',
  'Nidalee_Splash_2.jpg',
  'Nidalee_Splash_3.jpg',
  'Nidalee_Splash_4.jpg',
  'Nidalee_Splash_5.jpg',
  'Nidalee_Splash_6.jpg',
  'Nidalee_Splash_7.jpg',
  'Nocturne_Splash_0.jpg',
  'Nocturne_Splash_1.jpg',
  'Nocturne_Splash_2.jpg',
  'Nocturne_Splash_3.jpg',
  'Nocturne_Splash_4.jpg',
  'Nocturne_Splash_5.jpg',
  'Nunu_Splash_0.jpg',
  'Nunu_Splash_1.jpg',
  'Nunu_Splash_2.jpg',
  'Nunu_Splash_3.jpg',
  'Nunu_Splash_4.jpg',
  'Nunu_Splash_5.jpg',
  'Nunu_Splash_6.jpg',
  'Olaf_Splash_0.jpg',
  'Olaf_Splash_1.jpg',
  'Olaf_Splash_2.jpg',
  'Olaf_Splash_3.jpg',
  'Olaf_Splash_4.jpg',
  'Orianna_Splash_0.jpg',
  'Orianna_Splash_1.jpg',
  'Orianna_Splash_2.jpg',
  'Orianna_Splash_3.jpg',
  'Orianna_Splash_4.jpg',
  'Orianna_Splash_5.jpg',
  'Pantheon_Splash_0.jpg',
  'Pantheon_Splash_1.jpg',
  'Pantheon_Splash_2.jpg',
  'Pantheon_Splash_3.jpg',
  'Pantheon_Splash_4.jpg',
  'Pantheon_Splash_5.jpg',
  'Pantheon_Splash_6.jpg',
  'Poppy_Splash_0.jpg',
  'Poppy_Splash_1.jpg',
  'Poppy_Splash_2.jpg',
  'Poppy_Splash_3.jpg',
  'Poppy_Splash_4.jpg',
  'Poppy_Splash_5.jpg',
  'Poppy_splash_6.jpg',
  'Quinn_Splash_0.jpg',
  'Quinn_Splash_1.jpg',
  'Quinn_Splash_2.jpg',
  'Rammus_Splash_0.jpg',
  'Rammus_Splash_1.jpg',
  'Rammus_Splash_2.jpg',
  'Rammus_Splash_3.jpg',
  'Rammus_Splash_4.jpg',
  'Rammus_Splash_5.jpg',
  'Rammus_Splash_6.jpg',
  'RekSai_Splash_0.jpg',
  'RekSai_Splash_1.jpg',
  'Renekton_Splash_0.jpg',
  'Renekton_Splash_1.jpg',
  'Renekton_Splash_2.jpg',
  'Renekton_Splash_3.jpg',
  'Renekton_Splash_4.jpg',
  'Renekton_Splash_5.jpg',
  'Renekton_Splash_6.jpg',
  'Rengar_Splash_0.jpg',
  'Rengar_Splash_1.jpg',
  'Rengar_Splash_2.jpg',
  'Riven_Splash_0.jpg',
  'Riven_Splash_1.jpg',
  'Riven_Splash_2.jpg',
  'Riven_Splash_3.jpg',
  'Riven_Splash_4.jpg',
  'Riven_Splash_5.jpg',
  'Rumble_Splash_0.jpg',
  'Rumble_Splash_1.jpg',
  'Rumble_Splash_2.jpg',
  'Rumble_Splash_3.jpg',
  'Ryze_Splash_0.jpg',
  'Ryze_Splash_1.jpg',
  'Ryze_Splash_2.jpg',
  'Ryze_Splash_3.jpg',
  'Ryze_Splash_4.jpg',
  'Ryze_Splash_5.jpg',
  'Ryze_Splash_6.jpg',
  'Ryze_Splash_7.jpg',
  'Ryze_Splash_8.jpg',
  'Sejuani_Splash_0.jpg',
  'Sejuani_Splash_1.jpg',
  'Sejuani_Splash_2.jpg',
  'Sejuani_Splash_3.jpg',
  'Sejuani_Splash_4.jpg',
  'Sejuani_Splash_5.jpg',
  'Shaco_Splash_0.jpg',
  'Shaco_Splash_1.jpg',
  'Shaco_Splash_2.jpg',
  'Shaco_Splash_3.jpg',
  'Shaco_Splash_4.jpg',
  'Shaco_Splash_5.jpg',
  'Shaco_Splash_6.jpg',
  'Shen_Splash_0.jpg',
  'Shen_Splash_1.jpg',
  'Shen_Splash_2.jpg',
  'Shen_Splash_3.jpg',
  'Shen_Splash_4.jpg',
  'Shen_Splash_5.jpg',
  'Shen_Splash_6.jpg',
  'Shyvana_Splash_0.jpg',
  'Shyvana_Splash_1.jpg',
  'Shyvana_Splash_2.jpg',
  'Shyvana_Splash_3.jpg',
  'Shyvana_Splash_4.jpg',
  'Shyvana_Splash_5.jpg',
  'Singed_Splash_0.jpg',
  'Singed_Splash_1.jpg',
  'Singed_Splash_2.jpg',
  'Singed_Splash_3.jpg',
  'Singed_Splash_4.jpg',
  'Singed_Splash_5.jpg',
  'Singed_Splash_6.jpg',
  'Singed_Splash_NaN.jpg',
  'Sion_Splash_0.jpg',
  'Sion_Splash_1.jpg',
  'Sion_Splash_2.jpg',
  'Sion_Splash_3.jpg',
  'Sion_Splash_4.jpg',
  'Sivir_Splash_0.jpg',
  'Sivir_Splash_1.jpg',
  'Sivir_Splash_2.jpg',
  'Sivir_Splash_3.jpg',
  'Sivir_Splash_4.jpg',
  'Sivir_Splash_5.jpg',
  'Sivir_Splash_6.jpg',
  'Sivir_Splash_7.jpg',
  'Skarner_Splash_0.jpg',
  'Skarner_Splash_1.jpg',
  'Skarner_Splash_2.jpg',
  'Skarner_Splash_3.jpg',
  'Sona_Splash_0.jpg',
  'Sona_Splash_1.jpg',
  'Sona_Splash_2.jpg',
  'Sona_Splash_3.jpg',
  'Sona_Splash_4.jpg',
  'Sona_Splash_5.jpg',
  'Soraka_Splash_0.jpg',
  'Soraka_Splash_1.jpg',
  'Soraka_Splash_2.jpg',
  'Soraka_Splash_3.jpg',
  'Soraka_Splash_4.jpg',
  'Swain_Splash_0.jpg',
  'Swain_Splash_1.jpg',
  'Swain_Splash_2.jpg',
  'Swain_Splash_3.jpg',
  'Syndra_Splash_0.jpg',
  'Syndra_Splash_1.jpg',
  'Syndra_Splash_2.jpg',
  'Talon_Splash_0.jpg',
  'Talon_Splash_1.jpg',
  'Talon_Splash_2.jpg',
  'Talon_Splash_3.jpg',
  'Taric_Splash_0.jpg',
  'Taric_Splash_1.jpg',
  'Taric_Splash_2.jpg',
  'Taric_Splash_3.jpg',
  'Teemo_Splash_0.jpg',
  'Teemo_Splash_1.jpg',
  'Teemo_Splash_2.jpg',
  'Teemo_Splash_3.jpg',
  'Teemo_Splash_4.jpg',
  'Teemo_Splash_5.jpg',
  'Teemo_Splash_6.jpg',
  'Teemo_Splash_7.jpg',
  'Thresh_Splash_0.jpg',
  'Thresh_Splash_1.jpg',
  'Thresh_Splash_2.jpg',
  'Thresh_Splash_3.jpg',
  'Tristana_Splash_0.jpg',
  'Tristana_Splash_1.jpg',
  'Tristana_Splash_2.jpg',
  'Tristana_Splash_3.jpg',
  'Tristana_Splash_4.jpg',
  'Tristana_Splash_5.jpg',
  'Tristana_Splash_6.jpg',
  'Trundle_Splash_0.jpg',
  'Trundle_Splash_1.jpg',
  'Trundle_Splash_2.jpg',
  'Trundle_Splash_3.jpg',
  'Trundle_Splash_4.jpg',
  'Tryndamere_Splash_0.jpg',
  'Tryndamere_Splash_1.jpg',
  'Tryndamere_Splash_2.jpg',
  'Tryndamere_Splash_3.jpg',
  'Tryndamere_Splash_4.jpg',
  'Tryndamere_Splash_5.jpg',
  'Tryndamere_Splash_6.jpg',
  'TwistedFate_Splash_0.jpg',
  'TwistedFate_Splash_1.jpg',
  'TwistedFate_Splash_2.jpg',
  'TwistedFate_Splash_3.jpg',
  'TwistedFate_Splash_4.jpg',
  'TwistedFate_Splash_5.jpg',
  'TwistedFate_Splash_6.jpg',
  'TwistedFate_Splash_7.jpg',
  'TwistedFate_Splash_8.jpg',
  'Twitch_Splash_0.jpg',
  'Twitch_Splash_1.jpg',
  'Twitch_Splash_2.jpg',
  'Twitch_Splash_3.jpg',
  'Twitch_Splash_4.jpg',
  'Twitch_Splash_5.jpg',
  'Twitch_Splash_6.jpg',
  'Udyr_Splash_0.jpg',
  'Udyr_Splash_1.jpg',
  'Udyr_Splash_2.jpg',
  'Udyr_Splash_3.jpg',
  'Urgot_Splash_0.jpg',
  'Urgot_Splash_1.jpg',
  'Urgot_Splash_2.jpg',
  'Urgot_Splash_3.jpg',
  'Varus_Splash_0.jpg',
  'Varus_Splash_1.jpg',
  'Varus_Splash_2.jpg',
  'Varus_Splash_3.jpg',
  'Varus_Splash_4.jpg',
  'Vayne_Splash_0.jpg',
  'Vayne_Splash_1.jpg',
  'Vayne_Splash_2.jpg',
  'Vayne_Splash_3.jpg',
  'Vayne_Splash_4.jpg',
  'Vayne_Splash_5.jpg',
  'Veigar_Splash_0.jpg',
  'Veigar_Splash_1.jpg',
  'Veigar_Splash_2.jpg',
  'Veigar_Splash_3.jpg',
  'Veigar_Splash_4.jpg',
  'Veigar_Splash_5.jpg',
  'Veigar_Splash_6.jpg',
  'Veigar_Splash_7.jpg',
  'Veigar_Splash_8.jpg',
  'Velkoz_Splash_0.jpg',
  'Velkoz_Splash_1.jpg',
  'Velkoz_Splash_2.jpg',
  'Vi_Splash_0.jpg',
  'Vi_Splash_1.jpg',
  'Vi_Splash_2.jpg',
  'Vi_Splash_3.jpg',
  'Viktor_Splash_0.jpg',
  'Viktor_Splash_1.jpg',
  'Viktor_Splash_2.jpg',
  'Viktor_Splash_3.jpg',
  'Vladimir_Splash_0.jpg',
  'Vladimir_Splash_1.jpg',
  'Vladimir_Splash_2.jpg',
  'Vladimir_Splash_3.jpg',
  'Vladimir_Splash_4.jpg',
  'Vladimir_Splash_5.jpg',
  'Vladimir_Splash_6.jpg',
  'Volibear_Splash_0.jpg',
  'Volibear_Splash_1.jpg',
  'Volibear_Splash_2.jpg',
  'Volibear_Splash_3.jpg',
  'Volibear_Splash_4.jpg',
  'Warwick_Splash_0.jpg',
  'Warwick_Splash_1.jpg',
  'Warwick_Splash_2.jpg',
  'Warwick_Splash_3.jpg',
  'Warwick_Splash_4.jpg',
  'Warwick_Splash_5.jpg',
  'Warwick_Splash_6.jpg',
  'Warwick_Splash_7.jpg',
  'Warwick_Splash_8.jpg',
  'Xerath_Splash_0.jpg',
  'Xerath_Splash_1.jpg',
  'Xerath_Splash_2.jpg',
  'Xerath_Splash_3.jpg',
  'XinZhao_Splash_0.jpg',
  'XinZhao_Splash_1.jpg',
  'XinZhao_Splash_2.jpg',
  'XinZhao_Splash_3.jpg',
  'XinZhao_Splash_4.jpg',
  'XinZhao_Splash_5.jpg',
  'Yasuo_Splash_0.jpg',
  'Yasuo_Splash_1.jpg',
  'Yasuo_Splash_2.jpg',
  'Yorick_Splash_0.jpg',
  'Yorick_Splash_1.jpg',
  'Yorick_Splash_2.jpg',
  'Zac_Splash_0.jpg',
  'Zac_Splash_1.jpg',
  'Zed_Splash_0.jpg',
  'Zed_Splash_1.jpg',
  'Zed_Splash_2.jpg',
  'Ziggs_Splash_0.jpg',
  'Ziggs_Splash_1.jpg',
  'Ziggs_Splash_2.jpg',
  'Ziggs_Splash_3.jpg',
  'Ziggs_Splash_4.jpg',
  'Zilean_Splash_0.jpg',
  'Zilean_Splash_1.jpg',
  'Zilean_Splash_2.jpg',
  'Zilean_Splash_3.jpg',
  'Zilean_Splash_4.jpg',
  'Zyra_Splash_0.jpg',
  'Zyra_Splash_1.jpg',
  'Zyra_Splash_2.jpg',
  'Zyra_Splash_3.jpg',
  'katarina_Splash_0.jpg',
];
var background = 'img/splash/' + splashes[Math.floor(Math.random() * splashes.length)];

$( document ).ready(function() {
  var img = new Image();
  img.onload = function(){
    $('body').css({'background': 'url('+ background + ') 80% center no-repeat fixed', 'background-size': 'cover'});
  };
  img.src = background;
  applySettings(Cookies.getJSON('statusSettings') || statusSettings);

  $('#gameName').focus();
});



/*------------------------------------*\
    UI Interaction
\*------------------------------------*/

// Input label animation
var id;
$('input').keyup(function() {
  id = $(this).attr('id');
  if ($(this).val()) {
    $('label[for="' + id + '"]').addClass('active');
    $('label[for="' + id + '"]').removeClass('inactive');
  } else {
    $('label[for="' + id + '"]').addClass('inactive');
    $('label[for="' + id + '"]').removeClass('active');
  }
});

// Advanced pane expansion
$('.customize').click(function() {
  $(this).toggleClass('active');

  // Activate/Disactivate hidden fields
  if ($(this).hasClass('active')){
    $('select').removeAttr('disabled');
  } else {
    $('select').attr('disabled', 'disabled');
  }

  $('.expand').toggleClass('hidden').toggleClass('revealed');
  $('.expand label').toggleClass('inactive').toggleClass('active');
});

// Generate button
$('.generate').click(function() {
  // Game name character min = 4 and max  = 30
  if ($('#gameName').val().length > 3) {
    $('#output').addClass('active').removeAttr('disabled');
    $('#output').val(generateMapUrl() + generateBase64());
    $('#output').select();
  } else {
    $('#gameName').addClass('error');
  }
});


/*------------------------------------*\
    Status
\*------------------------------------*/
var statusSettings = {
  'map': 'Summoner\'s Rift',
  'gameType': 'Tournament Draft',
  'players': '5',
  'spectators': 'Drop In Only'
};

function setStatus(statusInput){
  statusLine = statusSettings.map + ", " +
               statusSettings.gameType + ", " +
               statusSettings.players + " players per team, " +
               "Spectators: " + statusSettings.spectators;
  $('.status').html(statusLine);
}

// Changing the value of any input changes the statusSettings obj
$('select').change(function() {
  var prop = $(this).attr('id');
  statusSettings[prop] = $(this).val();
  setStatus();

  // Set cookie when tournament code is generated
  Cookies.set('statusSettings', statusSettings, { expires: 7});
});




/*------------------------------------*\
    Tournament Code Generation
\*------------------------------------*/

var mapSettings = {
  'map': '',       // Map ID
  'type': '',      // Game type ID
  'size': '',      // Team size
  'spectators': '' // Spectator join type
};

function generateMapUrl() {

  // Map ID association
  switch (statusSettings.map) {
    case 'Crystal Scar':
      mapSettings.map = 8;
      break;
    case 'Twisted Treeline':
      mapSettings.map = 10; //ID 10 is for new Twisted Treeline
      break;
    case 'Summoner\'s Rift':
      mapSettings.map = 11; //ID 11 is for new Summoner's Rift
      break;
    case 'Howling Abyss':
      mapSettings.map = 12;
      break;
  }

  // Game Type ID association
  switch (statusSettings.gameType) {
    case 'Blind Pick':
      mapSettings.type = 1;
      break;
    case 'Draft Mode':
      mapSettings.type = 2;
      break;
    case 'All Random':
      mapSettings.type = 4;
      break;
    case 'Tournament Draft':
      mapSettings.type = 6;
      break;
  }

  mapSettings.size = Number(statusSettings.players);

  switch (statusSettings.spectators) {
    case 'None':
      mapSettings.spectators = 'NONE';
      break;
    case 'Drop In Only':
      mapSettings.spectators = 'DROPINONLY';
      break;
    // case 'Friends':
    //   mapSettings.spectators = 'FRIENDS';
    //   break;
    case 'All':
      mapSettings.spectators = 'ALL';
      break;
  }

  // Create first part of tournament code with map settings
  return 'pvpnet://lol/customgame/joinorcreate/map' +
  mapSettings.map + '/pick' +
  mapSettings.type + '/team' +
  mapSettings.size + '/spec' +
  mapSettings.spectators +
  '/';
}

var gameSettings = {
  'name': '',     // Game name
  'extra': '',   // Any extra details to be sent to the reportURL
  'password': '', // Game password
  'report': ''    // URL for PHP POST for end-game results
};

function generateBase64() {
  gameSettings.name = $('#gameName').val();
  gameSettings.password = $('#password').val();

  return window.btoa(JSON.stringify(gameSettings));

}



/*------------------------------------*\
    Apply Settings From Cookies
\*------------------------------------*/

function applySettings(settings) {
  $('#map').val(settings.map);
  $('#gameType').val(settings.gameType);
  $('#players').val(settings.players);
  $('#spectators').val(settings.spectators);

  statusSettings.map = settings.map;
  statusSettings.gameType = settings.gameType;
  statusSettings.players = settings.players;
  statusSettings.spectators = settings.spectators;

  setStatus();
}