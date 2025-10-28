// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfirewallControlpolicyorderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder#acl_uuid CloudfirewallControlpolicyorder#acl_uuid}
  */
  readonly aclUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder#direction CloudfirewallControlpolicyorder#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder#id CloudfirewallControlpolicyorder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder#order CloudfirewallControlpolicyorder#order}
  */
  readonly order?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder alibabacloudstack_cloudfirewall_controlpolicyorder}
*/
export class CloudfirewallControlpolicyorder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cloudfirewall_controlpolicyorder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfirewallControlpolicyorder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfirewallControlpolicyorder to import
  * @param importFromId The id of the existing CloudfirewallControlpolicyorder that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfirewallControlpolicyorder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cloudfirewall_controlpolicyorder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudfirewall_controlpolicyorder alibabacloudstack_cloudfirewall_controlpolicyorder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfirewallControlpolicyorderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfirewallControlpolicyorderConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cloudfirewall_controlpolicyorder',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclUuid = config.aclUuid;
    this._direction = config.direction;
    this._id = config.id;
    this._order = config.order;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_uuid - computed: false, optional: false, required: true
  private _aclUuid?: string; 
  public get aclUuid() {
    return this.getStringAttribute('acl_uuid');
  }
  public set aclUuid(value: string) {
    this._aclUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclUuidInput() {
    return this._aclUuid;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_uuid: cdktf.stringToTerraform(this._aclUuid),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      order: cdktf.numberToTerraform(this._order),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_uuid: {
        value: cdktf.stringToHclTerraform(this._aclUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
