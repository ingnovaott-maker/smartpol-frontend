import boom from "@hapi/boom";

const validateFilterPeople = () => {
  return (req, res, next) => {
    const { gender, leaderId, politicalState, candidateId, page = 1, pageSize = 100 } = req.query;
    const { campaignId } = req.user;
    let filters = {
      gender,
      leader_id: leaderId,
      candidate_id: candidateId,
      political_state: politicalState,
      campaign_id: campaignId,
      page, 
      pageSize
    };

    let countFilter = Object.keys(filters).length;
    Object
    .entries(filters)
    .forEach(([key, value]) => {
      if(value === "" || value == null) {
        delete filters[key];
        countFilter -= 1;
      }
    });
    if(countFilter === 0) {
      next(boom.badRequest("Debe enviar por lo menos un filtro"));
    }
    filters.user_id = null;
    req.query = filters
    
    next();
  };
};

export { validateFilterPeople };
