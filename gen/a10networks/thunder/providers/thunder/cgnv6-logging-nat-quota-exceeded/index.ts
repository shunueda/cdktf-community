// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LoggingNatQuotaExceededAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded#id Cgnv6LoggingNatQuotaExceededA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'warning': Log level Warning (Default); 'critical': Log level Critical; 'notice': Log level Notice;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded#level Cgnv6LoggingNatQuotaExceededA#level}
  */
  readonly level?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded#uuid Cgnv6LoggingNatQuotaExceededA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded thunder_cgnv6_logging_nat_quota_exceeded}
*/
export class Cgnv6LoggingNatQuotaExceededA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_logging_nat_quota_exceeded";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LoggingNatQuotaExceededA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LoggingNatQuotaExceededA to import
  * @param importFromId The id of the existing Cgnv6LoggingNatQuotaExceededA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LoggingNatQuotaExceededA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_logging_nat_quota_exceeded", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_logging_nat_quota_exceeded thunder_cgnv6_logging_nat_quota_exceeded} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LoggingNatQuotaExceededAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LoggingNatQuotaExceededAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_logging_nat_quota_exceeded',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._level = config.level;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
