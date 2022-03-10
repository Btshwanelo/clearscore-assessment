/**
 * public information track function
 * @param  {[object]} arg1 personal object from the state
 * @return {[string]}      on track | of track
 */
export const public_info = (data) => {
  const i =
    data?.personal?.publicInfo?.courtAndInsolvencies.length > 0
      ? "off track"
      : "on track";
  return i;
};

/**
 * electoral roll track function
 * @param  {[object]} arg1 personal object from the state
 * @return {[string]}      on track | off track
 */
export const electoral_roll = (data) => {
  for (let i = 0; i < data?.personal?.electoralRoll.length; i++) {
    if (data?.personal?.electoralRoll[i].current === true) {
      return "on track";
    }
    return "off track";
  }
};

/**
 * credit utilisation track function
 * @param  {[object]} arg1 personal object from the state
 * @return {[string]}      on track | off track
 */
export const credit_utilisation = (data) => {
  for (let i = 0; i < data?.accounts?.length; i++) {
    if (data?.accounts[i].accountCategory === "credit_cards") {
      let limit = Math.round(
        (data?.accounts[i].accountCategory?.overview?.balance?.amount /
          data?.accounts[i].accountCategory?.overview?.limit?.amount) *
          100
      );
      if (limit >= 50) {
        return "off track";
      }
      return "on track";
    }
  }
};
