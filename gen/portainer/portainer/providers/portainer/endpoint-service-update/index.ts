// https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointServiceUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update#endpoint_id EndpointServiceUpdate#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update#id EndpointServiceUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update#pull_image EndpointServiceUpdate#pull_image}
  */
  readonly pullImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update#service_name EndpointServiceUpdate#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update portainer_endpoint_service_update}
*/
export class EndpointServiceUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_endpoint_service_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointServiceUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointServiceUpdate to import
  * @param importFromId The id of the existing EndpointServiceUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointServiceUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_endpoint_service_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/endpoint_service_update portainer_endpoint_service_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointServiceUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointServiceUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_endpoint_service_update',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._pullImage = config.pullImage;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // pull_image - computed: false, optional: true, required: false
  private _pullImage?: boolean | cdktf.IResolvable; 
  public get pullImage() {
    return this.getBooleanAttribute('pull_image');
  }
  public set pullImage(value: boolean | cdktf.IResolvable) {
    this._pullImage = value;
  }
  public resetPullImage() {
    this._pullImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullImageInput() {
    return this._pullImage;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      pull_image: cdktf.booleanToTerraform(this._pullImage),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_image: {
        value: cdktf.booleanToHclTerraform(this._pullImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
