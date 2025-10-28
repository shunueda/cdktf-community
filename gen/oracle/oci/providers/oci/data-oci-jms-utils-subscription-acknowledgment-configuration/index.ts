// https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_utils_subscription_acknowledgment_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsUtilsSubscriptionAcknowledgmentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_utils_subscription_acknowledgment_configuration#compartment_id DataOciJmsUtilsSubscriptionAcknowledgmentConfiguration#compartment_id}
  */
  readonly compartmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_utils_subscription_acknowledgment_configuration oci_jms_utils_subscription_acknowledgment_configuration}
*/
export class DataOciJmsUtilsSubscriptionAcknowledgmentConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_utils_subscription_acknowledgment_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsUtilsSubscriptionAcknowledgmentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsUtilsSubscriptionAcknowledgmentConfiguration to import
  * @param importFromId The id of the existing DataOciJmsUtilsSubscriptionAcknowledgmentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_utils_subscription_acknowledgment_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsUtilsSubscriptionAcknowledgmentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_utils_subscription_acknowledgment_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_utils_subscription_acknowledgment_configuration oci_jms_utils_subscription_acknowledgment_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsUtilsSubscriptionAcknowledgmentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsUtilsSubscriptionAcknowledgmentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_utils_subscription_acknowledgment_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledged_by - computed: true, optional: false, required: false
  public get acknowledgedBy() {
    return this.getStringAttribute('acknowledged_by');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_acknowledged - computed: true, optional: false, required: false
  public get isAcknowledged() {
    return this.getBooleanAttribute('is_acknowledged');
  }

  // time_acknowledged - computed: true, optional: false, required: false
  public get timeAcknowledged() {
    return this.getStringAttribute('time_acknowledged');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
