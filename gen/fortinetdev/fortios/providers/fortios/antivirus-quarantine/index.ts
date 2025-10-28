// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntivirusQuarantineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#agelimit AntivirusQuarantine#agelimit}
  */
  readonly agelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#destination AntivirusQuarantine#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#drop_blocked AntivirusQuarantine#drop_blocked}
  */
  readonly dropBlocked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#drop_heuristic AntivirusQuarantine#drop_heuristic}
  */
  readonly dropHeuristic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#drop_infected AntivirusQuarantine#drop_infected}
  */
  readonly dropInfected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#drop_machine_learning AntivirusQuarantine#drop_machine_learning}
  */
  readonly dropMachineLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#id AntivirusQuarantine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#lowspace AntivirusQuarantine#lowspace}
  */
  readonly lowspace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#maxfilesize AntivirusQuarantine#maxfilesize}
  */
  readonly maxfilesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#quarantine_quota AntivirusQuarantine#quarantine_quota}
  */
  readonly quarantineQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#store_blocked AntivirusQuarantine#store_blocked}
  */
  readonly storeBlocked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#store_heuristic AntivirusQuarantine#store_heuristic}
  */
  readonly storeHeuristic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#store_infected AntivirusQuarantine#store_infected}
  */
  readonly storeInfected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#store_machine_learning AntivirusQuarantine#store_machine_learning}
  */
  readonly storeMachineLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#vdomparam AntivirusQuarantine#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine fortios_antivirus_quarantine}
*/
export class AntivirusQuarantine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_antivirus_quarantine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntivirusQuarantine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntivirusQuarantine to import
  * @param importFromId The id of the existing AntivirusQuarantine that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntivirusQuarantine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_antivirus_quarantine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_quarantine fortios_antivirus_quarantine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntivirusQuarantineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AntivirusQuarantineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_antivirus_quarantine',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agelimit = config.agelimit;
    this._destination = config.destination;
    this._dropBlocked = config.dropBlocked;
    this._dropHeuristic = config.dropHeuristic;
    this._dropInfected = config.dropInfected;
    this._dropMachineLearning = config.dropMachineLearning;
    this._id = config.id;
    this._lowspace = config.lowspace;
    this._maxfilesize = config.maxfilesize;
    this._quarantineQuota = config.quarantineQuota;
    this._storeBlocked = config.storeBlocked;
    this._storeHeuristic = config.storeHeuristic;
    this._storeInfected = config.storeInfected;
    this._storeMachineLearning = config.storeMachineLearning;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agelimit - computed: false, optional: true, required: false
  private _agelimit?: number; 
  public get agelimit() {
    return this.getNumberAttribute('agelimit');
  }
  public set agelimit(value: number) {
    this._agelimit = value;
  }
  public resetAgelimit() {
    this._agelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agelimitInput() {
    return this._agelimit;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // drop_blocked - computed: false, optional: true, required: false
  private _dropBlocked?: string; 
  public get dropBlocked() {
    return this.getStringAttribute('drop_blocked');
  }
  public set dropBlocked(value: string) {
    this._dropBlocked = value;
  }
  public resetDropBlocked() {
    this._dropBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropBlockedInput() {
    return this._dropBlocked;
  }

  // drop_heuristic - computed: false, optional: true, required: false
  private _dropHeuristic?: string; 
  public get dropHeuristic() {
    return this.getStringAttribute('drop_heuristic');
  }
  public set dropHeuristic(value: string) {
    this._dropHeuristic = value;
  }
  public resetDropHeuristic() {
    this._dropHeuristic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropHeuristicInput() {
    return this._dropHeuristic;
  }

  // drop_infected - computed: false, optional: true, required: false
  private _dropInfected?: string; 
  public get dropInfected() {
    return this.getStringAttribute('drop_infected');
  }
  public set dropInfected(value: string) {
    this._dropInfected = value;
  }
  public resetDropInfected() {
    this._dropInfected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInfectedInput() {
    return this._dropInfected;
  }

  // drop_machine_learning - computed: false, optional: true, required: false
  private _dropMachineLearning?: string; 
  public get dropMachineLearning() {
    return this.getStringAttribute('drop_machine_learning');
  }
  public set dropMachineLearning(value: string) {
    this._dropMachineLearning = value;
  }
  public resetDropMachineLearning() {
    this._dropMachineLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropMachineLearningInput() {
    return this._dropMachineLearning;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lowspace - computed: true, optional: true, required: false
  private _lowspace?: string; 
  public get lowspace() {
    return this.getStringAttribute('lowspace');
  }
  public set lowspace(value: string) {
    this._lowspace = value;
  }
  public resetLowspace() {
    this._lowspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowspaceInput() {
    return this._lowspace;
  }

  // maxfilesize - computed: false, optional: true, required: false
  private _maxfilesize?: number; 
  public get maxfilesize() {
    return this.getNumberAttribute('maxfilesize');
  }
  public set maxfilesize(value: number) {
    this._maxfilesize = value;
  }
  public resetMaxfilesize() {
    this._maxfilesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxfilesizeInput() {
    return this._maxfilesize;
  }

  // quarantine_quota - computed: false, optional: true, required: false
  private _quarantineQuota?: number; 
  public get quarantineQuota() {
    return this.getNumberAttribute('quarantine_quota');
  }
  public set quarantineQuota(value: number) {
    this._quarantineQuota = value;
  }
  public resetQuarantineQuota() {
    this._quarantineQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineQuotaInput() {
    return this._quarantineQuota;
  }

  // store_blocked - computed: true, optional: true, required: false
  private _storeBlocked?: string; 
  public get storeBlocked() {
    return this.getStringAttribute('store_blocked');
  }
  public set storeBlocked(value: string) {
    this._storeBlocked = value;
  }
  public resetStoreBlocked() {
    this._storeBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeBlockedInput() {
    return this._storeBlocked;
  }

  // store_heuristic - computed: true, optional: true, required: false
  private _storeHeuristic?: string; 
  public get storeHeuristic() {
    return this.getStringAttribute('store_heuristic');
  }
  public set storeHeuristic(value: string) {
    this._storeHeuristic = value;
  }
  public resetStoreHeuristic() {
    this._storeHeuristic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeHeuristicInput() {
    return this._storeHeuristic;
  }

  // store_infected - computed: true, optional: true, required: false
  private _storeInfected?: string; 
  public get storeInfected() {
    return this.getStringAttribute('store_infected');
  }
  public set storeInfected(value: string) {
    this._storeInfected = value;
  }
  public resetStoreInfected() {
    this._storeInfected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInfectedInput() {
    return this._storeInfected;
  }

  // store_machine_learning - computed: true, optional: true, required: false
  private _storeMachineLearning?: string; 
  public get storeMachineLearning() {
    return this.getStringAttribute('store_machine_learning');
  }
  public set storeMachineLearning(value: string) {
    this._storeMachineLearning = value;
  }
  public resetStoreMachineLearning() {
    this._storeMachineLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeMachineLearningInput() {
    return this._storeMachineLearning;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agelimit: cdktf.numberToTerraform(this._agelimit),
      destination: cdktf.stringToTerraform(this._destination),
      drop_blocked: cdktf.stringToTerraform(this._dropBlocked),
      drop_heuristic: cdktf.stringToTerraform(this._dropHeuristic),
      drop_infected: cdktf.stringToTerraform(this._dropInfected),
      drop_machine_learning: cdktf.stringToTerraform(this._dropMachineLearning),
      id: cdktf.stringToTerraform(this._id),
      lowspace: cdktf.stringToTerraform(this._lowspace),
      maxfilesize: cdktf.numberToTerraform(this._maxfilesize),
      quarantine_quota: cdktf.numberToTerraform(this._quarantineQuota),
      store_blocked: cdktf.stringToTerraform(this._storeBlocked),
      store_heuristic: cdktf.stringToTerraform(this._storeHeuristic),
      store_infected: cdktf.stringToTerraform(this._storeInfected),
      store_machine_learning: cdktf.stringToTerraform(this._storeMachineLearning),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agelimit: {
        value: cdktf.numberToHclTerraform(this._agelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_blocked: {
        value: cdktf.stringToHclTerraform(this._dropBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_heuristic: {
        value: cdktf.stringToHclTerraform(this._dropHeuristic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_infected: {
        value: cdktf.stringToHclTerraform(this._dropInfected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_machine_learning: {
        value: cdktf.stringToHclTerraform(this._dropMachineLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lowspace: {
        value: cdktf.stringToHclTerraform(this._lowspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxfilesize: {
        value: cdktf.numberToHclTerraform(this._maxfilesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quarantine_quota: {
        value: cdktf.numberToHclTerraform(this._quarantineQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      store_blocked: {
        value: cdktf.stringToHclTerraform(this._storeBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_heuristic: {
        value: cdktf.stringToHclTerraform(this._storeHeuristic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_infected: {
        value: cdktf.stringToHclTerraform(this._storeInfected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_machine_learning: {
        value: cdktf.stringToHclTerraform(this._storeMachineLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
