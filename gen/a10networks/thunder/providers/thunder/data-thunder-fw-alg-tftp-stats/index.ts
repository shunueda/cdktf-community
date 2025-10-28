// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwAlgTftpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats#id DataThunderFwAlgTftpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats#stats DataThunderFwAlgTftpStats#stats}
  */
  readonly stats?: DataThunderFwAlgTftpStatsStats;
}
export interface DataThunderFwAlgTftpStatsStats {
  /**
  * TFTP Client Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats#session_created DataThunderFwAlgTftpStats#session_created}
  */
  readonly sessionCreated?: number;
}

export function dataThunderFwAlgTftpStatsStatsToTerraform(struct?: DataThunderFwAlgTftpStatsStatsOutputReference | DataThunderFwAlgTftpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_created: cdktf.numberToTerraform(struct!.sessionCreated),
  }
}


export function dataThunderFwAlgTftpStatsStatsToHclTerraform(struct?: DataThunderFwAlgTftpStatsStatsOutputReference | DataThunderFwAlgTftpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_created: {
      value: cdktf.numberToHclTerraform(struct!.sessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwAlgTftpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwAlgTftpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreated = this._sessionCreated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwAlgTftpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionCreated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionCreated = value.sessionCreated;
    }
  }

  // session_created - computed: false, optional: true, required: false
  private _sessionCreated?: number; 
  public get sessionCreated() {
    return this.getNumberAttribute('session_created');
  }
  public set sessionCreated(value: number) {
    this._sessionCreated = value;
  }
  public resetSessionCreated() {
    this._sessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreatedInput() {
    return this._sessionCreated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats thunder_fw_alg_tftp_stats}
*/
export class DataThunderFwAlgTftpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_alg_tftp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwAlgTftpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwAlgTftpStats to import
  * @param importFromId The id of the existing DataThunderFwAlgTftpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwAlgTftpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_alg_tftp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_tftp_stats thunder_fw_alg_tftp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwAlgTftpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwAlgTftpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_alg_tftp_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwAlgTftpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwAlgTftpStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderFwAlgTftpStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderFwAlgTftpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwAlgTftpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
