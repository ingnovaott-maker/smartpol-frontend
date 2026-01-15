"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.People = exports.PEOPLE_TABLE = exports.PEOPLE_SCHEMA = void 0;
var _sequelize = require("sequelize");
var _departament = require("./departament.js");
var _municipality = require("./municipality.js");
var _user = require("./user.js");
var _candidate = require("./candidate.js");
var _campaign = require("./campaign.js");
var _votePlace = require("./votePlace.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var PEOPLE_TABLE = exports.PEOPLE_TABLE = 'people';
var PEOPLE_SCHEMA = exports.PEOPLE_SCHEMA = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.DataTypes.BIGINT
  },
  identificationNumber: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING,
    field: 'identification_number'
  },
  name: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING,
    field: 'last_name'
  },
  cellPhone: {
    type: _sequelize.DataTypes.STRING,
    field: 'cell_phone'
  },
  phone: {
    type: _sequelize.DataTypes.STRING
  },
  departamentId: {
    allowNull: false,
    type: _sequelize.DataTypes.INTEGER,
    field: 'departament_id',
    references: {
      model: _departament.DEPARTAMENT_TABLE,
      key: 'id'
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  },
  municipalityId: {
    allowNull: false,
    type: _sequelize.DataTypes.INTEGER,
    field: 'municipality_id',
    references: {
      model: _municipality.MUNICIPALITY_TABLE,
      key: 'id'
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT'
  },
  userId: {
    allowNull: true,
    type: _sequelize.DataTypes.BIGINT,
    field: 'user_id',
    references: {
      model: _user.USER_TABLE,
      key: 'id'
    }
  },
  neighborhood: {
    type: _sequelize.DataTypes.STRING
  },
  sidewalk: {
    type: _sequelize.DataTypes.STRING
  },
  address: {
    type: _sequelize.DataTypes.STRING
  },
  birthdate: {
    allowNull: true,
    type: _sequelize.DataTypes.DATE
  },
  email: {
    type: _sequelize.DataTypes.STRING
  },
  leaderId: {
    allowNull: true,
    type: _sequelize.DataTypes.BIGINT,
    field: 'leader_id',
    references: {
      model: _user.USER_TABLE,
      key: 'id'
    }
  },
  candidateId: {
    allowNull: true,
    type: _sequelize.DataTypes.BIGINT,
    field: 'candidate_id',
    references: {
      model: _candidate.CANDIDATE_TABLE,
      key: 'id'
    }
  },
  voteplaceId: {
    allowNull: true,
    type: _sequelize.DataTypes.BIGINT,
    field: 'vote_place_id',
    references: {
      model: _votePlace.VOTE_PLACE_TABLE,
      key: 'id'
    }
  },
  table: {
    allowNull: true,
    type: _sequelize.DataTypes.INTEGER
  },
  gender: {
    allowNull: false,
    type: _sequelize.DataTypes.CHAR(5)
  },
  bloodType: {
    type: _sequelize.DataTypes.CHAR(5),
    field: 'blood_type'
  },
  occupation: {
    type: _sequelize.DataTypes.STRING
  },
  profession: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING
  },
  population: {
    type: _sequelize.DataTypes.STRING
  },
  academicProfile: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING,
    field: 'academic_profile'
  },
  description: {
    type: _sequelize.DataTypes.TEXT
  },
  observations: {
    type: _sequelize.DataTypes.TEXT
  },
  politicalState: {
    type: _sequelize.DataTypes.STRING,
    field: 'political_state'
  },
  campaignId: {
    allowNull: true,
    type: _sequelize.DataTypes.BIGINT,
    field: 'campaign_id',
    references: {
      model: _campaign.CAMPAIGN_TABLE,
      key: 'id'
    }
  },
  createdBy: {
    allowNull: false,
    field: 'created_by',
    type: _sequelize.DataTypes.BIGINT
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: _sequelize.DataTypes.DATE,
    defaultValue: _sequelize.DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    field: 'updated_at',
    type: _sequelize.DataTypes.DATE
  },
  isVoted: {
    allowNull: true,
    field: 'is_voted',
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  votedDate: {
    allowNull: true,
    field: 'voted_date',
    type: _sequelize.DataTypes.DATE
  }
};

/* const PEOPLE_INDEXES = {
  indexes: [
    {
      name: 'identificationNumber_campaignId_index',
      fields: ['identificationNumber', 'campaignId']
    }
  ]
} */
var People = exports.People = /*#__PURE__*/function (_Model) {
  function People() {
    _classCallCheck(this, People);
    return _callSuper(this, People, arguments);
  }
  _inherits(People, _Model);
  return _createClass(People, null, [{
    key: "associate",
    value: function associate(models) {
      this.belongsTo(models === null || models === void 0 ? void 0 : models.Departament, {
        as: 'departament'
      });
      this.belongsTo(models === null || models === void 0 ? void 0 : models.Municipality, {
        as: 'municipality'
      });
      this.belongsTo(models === null || models === void 0 ? void 0 : models.Candidate, {
        as: 'candidate'
      });
      this.belongsTo(models === null || models === void 0 ? void 0 : models.VotePlace, {
        as: 'voteplace'
      });
      this.belongsTo(models === null || models === void 0 ? void 0 : models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.belongsTo(models === null || models === void 0 ? void 0 : models.User, {
        foreignKey: 'leader_id',
        as: 'leader'
      });
    }
  }, {
    key: "config",
    value: function config(sequelize) {
      return {
        sequelize: sequelize,
        tableName: PEOPLE_TABLE,
        modelName: 'People',
        timestamps: true
      };
    }
  }]);
}(_sequelize.Model);