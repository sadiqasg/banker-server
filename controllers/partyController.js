import parties from '../models/parties';

class Parties {
  static async getParties(req, res) {
    try {
      return await res.json({ status: 200, parties });
    } catch (err) {
      return res.status(404).json({ status: 404, error: 'Parties not found!' });
    }
  }

  static async getOneParty(req, res) {
    const partyId = parseInt(req.params.id, 10);
    try {
      const partyItem = await parties.filter(party => party.partyId == partyId)[0];
      if (!partyItem) {
        return res.status(404).json({ status: 404, error: 'Party does not exist!' });
      }
      return res.status(200).json({ status: 200, data: [partyItem] });
    } catch (err) {
      return res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }

  static createParty(req, res) {
    const newParty = {
      partyId: parties.length + 1,
      name: req.body.name,
      hqAddress: req.body.hqAddress,
      logoUrl: req.body.logoUrl,
    };
    parties.push(newParty);
    res.status(201).json({ status: 201, data: [parties[parties.length - 1]] });
  }


  static async editParty(req, res) {
    try {
      const partyId = parseInt(req.params.id, 10);
      const party = await parties.filter(item => item.partyId == partyId)[0];
      if (!party) {
        return res.status(404).json({ status: 404, error: 'Party does not exist!' });
      }
      const index = parties.indexOf(party);
      const keys = Object.keys(req.body);
      keys.forEach((key) => {
        party[key] = req.body[key];
      });
      parties[index] = party;
      res.status(200).json({ status: 200, data: [parties[index]] });
    } catch (err) {
      res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }

  static async deleteParty(req, res) {
    try {
      const partyId = parseInt(req.params.id, 10);
      const party = parties.filter(item => item.partyId == partyId)[0];
      const index = parties.indexOf(party);
      if (!party) {
        return res.status(404).json({ status: 404, error: 'Party does not exist!' });
      }
      parties.splice(index, 1);
      res.status(200).json({ status: 200, message: `The is party with this id: ${partyId} has been removed.` });
    } catch (err) {
      res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }
}

export default Parties;
