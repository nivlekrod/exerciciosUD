export default function VerificaMedia(media) {
  let media_a = 0;
  for(let i = 0; i < media.length; i++){
    media_a += media[i]
  }
  
  media_a = media_a/media.length
  if (media_a >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
