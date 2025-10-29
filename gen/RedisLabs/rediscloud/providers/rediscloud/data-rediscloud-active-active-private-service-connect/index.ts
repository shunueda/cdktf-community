// https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudActiveActivePrivateServiceConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect#id DataRediscloudActiveActivePrivateServiceConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the GCP region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect#region_id DataRediscloudActiveActivePrivateServiceConnect#region_id}
  */
  readonly regionId: number;
  /**
  * The ID of an Active-Active subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect#subscription_id DataRediscloudActiveActivePrivateServiceConnect#subscription_id}
  */
  readonly subscriptionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect rediscloud_active_active_private_service_connect}
*/
export class DataRediscloudActiveActivePrivateServiceConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_private_service_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudActiveActivePrivateServiceConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudActiveActivePrivateServiceConnect to import
  * @param importFromId The id of the existing DataRediscloudActiveActivePrivateServiceConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudActiveActivePrivateServiceConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_private_service_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/data-sources/active_active_private_service_connect rediscloud_active_active_private_service_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudActiveActivePrivateServiceConnectConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudActiveActivePrivateServiceConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_private_service_connect',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.7.1'
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
    this._regionId = config.regionId;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_host_name - computed: true, optional: false, required: false
  public get connectionHostName() {
    return this.getStringAttribute('connection_host_name');
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

  // private_service_connect_service_id - computed: true, optional: false, required: false
  public get privateServiceConnectServiceId() {
    return this.getNumberAttribute('private_service_connect_service_id');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // service_attachment_name - computed: true, optional: false, required: false
  public get serviceAttachmentName() {
    return this.getStringAttribute('service_attachment_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region_id: cdktf.numberToTerraform(this._regionId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
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
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
